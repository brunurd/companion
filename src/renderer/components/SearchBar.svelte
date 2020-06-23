<script>

import { onDestroy } from 'svelte';
import { url, webview } from '../store.js';
import IconButton from "./IconButton.svelte";

let localUrl;
let searchInput;
let prevButtonInactive;
let homeButtonInactive;
let nextButtonInactive;

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
  localStorage.setItem('url', localUrl);
}

function formSubmitHandle(e) {
  e.preventDefault();
  refresh();
  return false;
}

function prev() {
  $webview.goBack();
  nextButtonInactive = false;
}

function goHome() {
  $webview.goToIndex(0);
  updateURL();
}

function next() {
  $webview.goForward();
  prevButtonInactive = false;
}

function checkHistoryButtons() {
  if ($webview.canGoBack()) {
    prevButtonInactive = false;
    homeButtonInactive = false;
  } else {
    prevButtonInactive = true;
    homeButtonInactive = true;
  }
  if ($webview.canGoForward()) {
    nextButtonInactive = false;
  } else {
    nextButtonInactive = true;
  }
}

function updateURL() {
  if (document.activeElement === searchInput) {
    return;
  }
  const webviewUrl = $webview.getURL();
  searchInput.value = webviewUrl;
  localStorage.setItem('url', webviewUrl);
}

</script>

<form class="search-bar" on:submit={formSubmitHandle}>
  <nav>
    <IconButton onClick={prev} inactive={prevButtonInactive} icons="fa-arrow-left" />
    <IconButton onClick={goHome} inactive={homeButtonInactive} icons="fa-home" />
    <IconButton onClick={next}  inactive={nextButtonInactive} icons="fa-arrow-right" />
  </nav>
  <input
    type="text"
    placeholder="Url here..."
    bind:value={localUrl}
    bind:this={searchInput} />
  <button
    type="submit"
    on:click={refresh}>
    Go
  </button>
</form>

<style>
.search-bar {
  height: 35px;
  width: 100%;
  display: flex;
  overflow: hidden;
}

nav {
  background-color: rgb(60, 60, 60);
  width: 75px;
  padding: 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

input {
  width: calc(100% - 130px);
  padding: 10px;
  border: none;
  border-bottom: 1px solid rgb(220, 220, 220);
  background-color: #fff;
}

input:focus {
  background-color: #eee;
}

button {
  width: 60px;
  z-index: 2;
  background-color: #33455a;
  border: none;
  cursor: pointer;
  color: #fff;
}

button:hover {
  background-color: #44566b;
}

button:focus {
  background-color: #223449;
}
</style>