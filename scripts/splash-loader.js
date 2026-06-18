/**
 * Splash loader — shows purple splash until Flutter first frame, then fade out.
 */

(function () {
  'use strict';

  const SPLASH_CONFIG = {
    fadeOutDuration: 400,
    delayBeforeFadeMs: 100,
    maxDisplayMs: 0,
  };

  const SPLASH_ID = 'splash';

  function getSplash() {
    return document.getElementById(SPLASH_ID);
  }

  function fadeOut(splashEl, durationMs, onDone) {
    if (!splashEl) {
      if (onDone) onDone();
      return;
    }
    splashEl.classList.add('splash--hidden');
    setTimeout(function () {
      splashEl.style.display = 'none';
      if (onDone) onDone();
    }, durationMs);
  }

  function onFirstFrame() {
    var splash = getSplash();
    setTimeout(function () {
      fadeOut(splash, SPLASH_CONFIG.fadeOutDuration);
    }, SPLASH_CONFIG.delayBeforeFadeMs);
  }

  function init() {
    var splash = getSplash();
    if (!splash) return;

    splash.style.display = 'block';

    var handled = false;
    function handleFirstFrame() {
      if (handled) return;
      handled = true;
      window.removeEventListener('flutter-first-frame', onFirstFrameListener);
      if (maxTimeoutId) clearTimeout(maxTimeoutId);
      onFirstFrame();
    }

    var onFirstFrameListener = handleFirstFrame;
    window.addEventListener('flutter-first-frame', onFirstFrameListener);

    var maxTimeoutId = null;
    if (SPLASH_CONFIG.maxDisplayMs > 0) {
      maxTimeoutId = setTimeout(handleFirstFrame, SPLASH_CONFIG.maxDisplayMs);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
