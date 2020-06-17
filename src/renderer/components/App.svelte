<script>

import { onDestroy } from 'svelte';
import AppBar from './AppBar.svelte';
import WebView from './WebView.svelte';

let appBarIsShowing = true;

const companion = window.__COMPANION__;
const showAppBarInterval = setInterval(showAppBar, 1000);
const hideAppBarInterval = setInterval(hideAppBar, 3000);

onDestroy(() => {
  clearInterval(showAppBarInterval);
  clearInterval(hideAppBarInterval);
});

function hideAppBar() {
  const mouseIsInsideWindow = companion.insideWindow();
  const isFullscreen = companion.isFullscreen();

  if ((!mouseIsInsideWindow && appBarIsShowing) || isFullscreen) {
    appBarIsShowing = false;
  }
}

function showAppBar() {
  const mouseIsInsideWindow = companion.insideWindow();
  const mouseIsIdle = companion.mouseIsIdle();
  const isFullscreen = companion.isFullscreen();

  if ((mouseIsInsideWindow && !appBarIsShowing && !mouseIsIdle) && !isFullscreen) {
    appBarIsShowing = true;
  }
}

</script>

<main class="app">
  <AppBar show={appBarIsShowing} />
  <WebView expand={!appBarIsShowing} />
</main>

<style>
.app {
  height: 100%;
}
</style>
