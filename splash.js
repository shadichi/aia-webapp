/**
 * Splash screen: hide and remove when Flutter has drawn its first frame.
 */
window.addEventListener('flutter-first-frame', function () {
  var splash = document.getElementById('splash');
  if (splash) {
    splash.classList.add('hidden');
    setTimeout(function () {
      splash.remove();
    }, 450);
  }
});
