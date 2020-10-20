<script>

import { url, webview } from '../store.js';

export let expand;

</script>

<div class="webview { expand? 'full' : '' }">
  <webview 
    bind:this={$webview}
    src={$url}
    allowpopups
  >
  </webview>
</div>

<style>
.webview {
  display: flex;
  width: 100%;
  height: calc(100% - 65px);
}

.full {
  height: 100%;
}

webview {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
