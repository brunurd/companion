<script>

export let icons;
export let onClick;
export let inactive = false;

</script>

<div class="icon-button {inactive ? 'inactive' : ''}" on:click={onClick}>
  <i class="fa {icons}" />
</div>

<style>
.icon-button {
  cursor: pointer;
  margin-left: 10px;
  color: rgba(245, 245, 245, 0.3);
}

.icon-button:first-child {
  margin-left: 0;
}

.icon-button:hover {
  color: rgba(247, 247, 247, 0.6);
}

.inactive {
  opacity: 0.2;
  cursor: default;
  pointer-events: none;
}
</style>