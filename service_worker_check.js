// Check for service worker updates and notify Flutter app via postMessage.
function checkForServiceWorkerUpdate() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.ready.then(function (registration) {
    function notifyWhenInstalled(worker) {
      if (!worker) return;
      worker.addEventListener('statechange', function () {
        if (worker.state === 'installed' && navigator.serviceWorker.controller) {
          _postMessage('NEW_VERSION_AVAILABLE');
        }
      });
    }

    if (registration.waiting && navigator.serviceWorker.controller) {
      _postMessage('NEW_VERSION_AVAILABLE');
    }

    notifyWhenInstalled(registration.installing);
    registration.update().catch(function (_) {});

    registration.addEventListener('updatefound', function () {
      var installingWorker = registration.installing;
      notifyWhenInstalled(installingWorker);
    });
  });

  navigator.serviceWorker.addEventListener('controllerchange', function () {
    _postMessage('SW_CONTROLLER_CHANGED');
  });
}

function activateWaitingServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.getRegistration().then(function (registration) {
    if (!registration) return;

    function skipWaitingIfPossible() {
      if (registration.waiting) {
        // Flutter service worker listens for "skipWaiting".
        registration.waiting.postMessage('skipWaiting');
      }
    }

    skipWaitingIfPossible();
    registration.update().catch(function (_) {});

    if (registration.waiting) return;

    registration.addEventListener('updatefound', function () {
      var installingWorker = registration.installing;
      if (!installingWorker) return;
      installingWorker.addEventListener('statechange', function () {
        if (installingWorker.state === 'installed') {
          skipWaitingIfPossible();
        }
      });
    });
  });
}

function clearServiceWorkersAndCachesThenReload() {
  var unregisterPromise = Promise.resolve();
  if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
    unregisterPromise = navigator.serviceWorker
      .getRegistrations()
      .then(function (registrations) {
        return Promise.all(
          registrations.map(function (registration) {
            return registration.unregister();
          }),
        );
      })
      .catch(function (_) {});
  }

  var clearCachesPromise = Promise.resolve();
  if ('caches' in window && caches.keys) {
    clearCachesPromise = caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys.map(function (key) {
            return caches.delete(key);
          }),
        );
      })
      .catch(function (_) {});
  }

  Promise.all([unregisterPromise, clearCachesPromise]).finally(function () {
    var currentUri = new URL(window.location.href);
    currentUri.searchParams.set('v', Date.now().toString());
    window.location.assign(currentUri.toString());
  });
}

function _postMessage(type) {
  window.postMessage({ type: type }, '*');
}
