<script>
  import { url, webview } from './store.js';
</script>

<div class="webview">
  <webview 
    bind:this={$webview}
    src={$url}
  >
  </webview>
</div>