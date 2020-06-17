<script>
  import { url, webview } from './store.js';

  export let expand;
</script>

<div class={ expand? 'webview webview--full' : 'webview' }>
  <webview 
    bind:this={$webview}
    src={$url}
  >
  </webview>
</div>