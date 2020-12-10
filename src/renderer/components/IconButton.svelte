<script>

export let icons;
export let onClick;
export let margin = '0';
export let color = 'rgba(245, 245, 245)';
export let inactive = false;

</script>

<div class="icon-button {inactive ? 'inactive' : ''}" on:click={onClick} style="margin: {margin};color: {color}">
  <i class="fa {icons}" />
</div>

<style>
.icon-button {
  cursor: pointer;
  opacity: 0.3;
}

.icon-button:hover {
  opacity: 0.6;
}

.inactive {
  opacity: 0.2;
  cursor: default;
  pointer-events: none;
}
</style>