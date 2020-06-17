<script>

import ClientBar from './ClientBar.svelte';
import SearchBar from './SearchBar.svelte';

export let show;

</script>

<div class="app-bar { show ? '' : 'hide' }">
  <ClientBar />
  <SearchBar />
</div>

<style>
.app-bar {
  height: 65px;
  transition: margin 0.5s ease;
  margin-top: 0;
}

.hide {
  margin-top: -65px;
}
</style>