<script>
  import { onDestroy } from 'svelte';
  import { url, webview } from './store.js';

  let localUrl;
  let nextBtn;
  let homeBtn;
  let prevBtn;
  let searchInput;

  const checkHistoryButtonsInterval = setInterval(checkHistoryButtons, 1000);
  const updateURLInterval = setInterval(updateURL, 1000);

  onDestroy(() => { 
    clearInterval(checkHistoryButtonsInterval);
    clearInterval(updateURLInterval);
  });

  function refresh() {
    if (!localUrl.includes('http')) {
      localUrl = 'https://' + localUrl;
    }
    url.set(localUrl);
  }

  function formSubmitHandle(e) {
    e.preventDefault();
    refresh();
    return false;
  }

  function prev() {
    $webview.goBack();
    nextBtn.classList.remove('inactive');
  }

  function goHome() {
    $webview.goToIndex(0);
    updateURL();
  }

  function next() {
    $webview.goForward();
    prevBtn.classList.remove('inactive');
  }

  function checkHistoryButtons() {
    if ($webview.canGoBack()) {
      prevBtn.classList.remove('inactive');
      homeBtn.classList.remove('inactive');
    } else {
      prevBtn.classList.add('inactive');
      homeBtn.classList.add('inactive');
    }
    if ($webview.canGoForward()) {
      nextBtn.classList.remove('inactive');
    } else {
      nextBtn.classList.add('inactive');
    }
  }

  function updateURL() {
    if (document.activeElement === searchInput) {
      return;
    }
    searchInput.value = $webview.getURL();
  }
</script>

<form class="search-bar" on:submit={formSubmitHandle}>
  <nav class="search-bar__nav">
    <span
      class="client-m__btn click prev-btn inactive prev-btn"
      bind:this={prevBtn}
      on:click={prev}>
      <i class="fa fa-arrow-left" />
    </span>
    <span
      class="client-m__btn click refresh-btn inactive home-btn"
      bind:this={homeBtn}
      on:click={goHome}>
      <i class="fa fa-home" />
    </span>
    <span
      class="client-m__btn click next-btn inactive next-btn"
      bind:this={nextBtn}
      on:click={next}>
      <i class="fa fa-arrow-right" />
    </span>
  </nav>
  <input
    id="search-input"
    class="search-bar__item"
    type="text"
    placeholder="Url here..."
    bind:value={localUrl}
    bind:this={searchInput} />
  <button
    class="search-bar__item search-submit-btn"
    type="submit"
    on:click={refresh}>
    Go
  </button>
</form>
