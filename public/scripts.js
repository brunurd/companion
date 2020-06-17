document.addEventListener('DOMContentLoaded', () => {
  let companion = window.__COMPANION__;

  let pinBtn = document.querySelector('.pin-btn');
  let icon = document.querySelector('.js-pin');
  let minimizeBtn = document.querySelector('.minimize-btn');
  let maximizeBtn = document.querySelector('.maximize-btn');
  let closeBtn = document.querySelector('.close-btn');
  let webviewWrapper = document.querySelector('.webview');
  let appBar = document.querySelector('.app-bar');

  function hideAppBar() {
    const mouseIsInsideWindow = companion.insideWindow();
    const isHidden = appBar.classList.contains('app-bar--hidden');
    const isFullscreen = companion.isFullscreen();

    if ((!mouseIsInsideWindow && !isHidden) || isFullscreen) {
      appBar.classList.add('app-bar--hidden');
      webviewWrapper.classList.add('webview--full');
    }
  }

  function showAppBar() {
    const mouseIsInsideWindow = companion.insideWindow();
    const mouseIsIdle = companion.mouseIsIdle();
    const isHidden = appBar.classList.contains('app-bar--hidden');
    const isFullscreen = companion.isFullscreen();

    if ((mouseIsInsideWindow && isHidden && !mouseIsIdle) && !isFullscreen) {
      appBar.classList.remove('app-bar--hidden');
      webviewWrapper.classList.remove('webview--full');
    }
  }

  pinBtn.addEventListener('click', () => {
    companion.setAlwaysOnTop();
    icon.classList.remove(companion.isAlwaysOnTop() ? 'fa-unlock' : 'fa-lock');
    icon.classList.add(companion.isAlwaysOnTop() ? 'fa-lock' : 'fa-unlock');
  });

  minimizeBtn.addEventListener('click', companion.minimize);

  maximizeBtn.addEventListener('click', companion.maximizeToggle);

  closeBtn.addEventListener('click', companion.close);

  window.setInterval(showAppBar, 1000);
  window.setInterval(hideAppBar, 3000);
});
