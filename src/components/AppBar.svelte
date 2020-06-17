<script>
  import ClientBar from './ClientBar.svelte';
  import SearchBar from './SearchBar.svelte';

  export let show;
</script>

<div class={ show ? 'app-bar' : 'app-bar app-bar--hidden' }>
  <ClientBar />
  <SearchBar />
</div>
