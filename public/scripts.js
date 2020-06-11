document.addEventListener('DOMContentLoaded', () => {
  let companion = window.__COMPANION__;

  let pinBtn = document.querySelector('.pin-btn');
  let icon = document.querySelector('.js-pin');
  let minimizeBtn = document.querySelector('.minimize-btn');
  let maximizeBtn = document.querySelector('.maximize-btn');
  let closeBtn = document.querySelector('.close-btn');
  let prevBtn = document.querySelector('.prev-btn');
  let homeBtn = document.querySelector('.home-btn');
  let nextBtn = document.querySelector('.next-btn');
  let webview = document.querySelector('.webview webview');
  let searchInput = document.querySelector('#search-input');
  let searchSubmitBtn = document.querySelector('.search-submit-btn');
  let searchBar = document.querySelector('.search-bar');
  let appBar = document.querySelector('.app-bar');

  function refresh(url = 'https://m.youtube.com') {
    if (!url.includes('http')) {
      url = 'https://' + url;
    }

    searchInput.value = url;
    webview.src = url;
  }

  function checkHistoryButtons() {
    if (webview.canGoBack()) {
      prevBtn.classList.remove('inactive');
      homeBtn.classList.remove('inactive');
    } else {
      prevBtn.classList.add('inactive');
      homeBtn.classList.add('inactive');
    }
    if (webview.canGoForward()) {
      nextBtn.classList.remove('inactive');
    } else {
      nextBtn.classList.add('inactive');
    }
  }

  function updateURL() {
    if (document.activeElement === searchInput) {
      return;
    }
    searchInput.value = webview.getURL();
  }

  function hideShowAppBar() {
    const mouseIsInsideWindow = companion.insideWindow();
    const mouseIsIdle = companion.mouseIsIdle();
    const isHidden = appBar.classList.contains('app-bar--hidden');

    if (!mouseIsInsideWindow && !isHidden) {
      appBar.classList.add('app-bar--hidden');
    }

    if (mouseIsIdle && !isHidden) {
      appBar.classList.add('app-bar--hidden');
    }

    if (mouseIsInsideWindow && isHidden) {
      appBar.classList.remove('app-bar--hidden');
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

  prevBtn.addEventListener('click', () => {
    webview.goBack();
    nextBtn.classList.remove('inactive');
  });

  homeBtn.addEventListener('click', () => {
    refresh();
  });

  nextBtn.addEventListener('click', () => {
    webview.goForward();
    prevBtn.classList.remove('inactive');
  });

  searchSubmitBtn.addEventListener('click', () => {
    refresh(searchInput.value);
  });

  window.setInterval(checkHistoryButtons, 1000);
  window.setInterval(updateURL, 1000);
  window.setInterval(hideShowAppBar, 2000);

  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    searchSubmitBtn.click();
    return false;
  });
});
