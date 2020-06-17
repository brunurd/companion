<script>

import IconButton from "./IconButton.svelte";

const companion = window.__COMPANION__;

let pinned = companion.isAlwaysOnTop();
let maximized = companion.isMaximized();

function pinToggle() {
  companion.setAlwaysOnTop();
  pinned = companion.isAlwaysOnTop();
}

function maximizeToggle() {
  companion.maximizeToggle();
  maximized = companion.isMaximized();
}

</script>

<div class="client-bar">
  <nav>
    <div class="buttons-list">
      <IconButton onClick={pinToggle} icons={pinned ? 'fa-lock' : 'fa-unlock'} />
    </div>
    <div class="buttons-list">
      <IconButton onClick={companion.minimize} icons="fa-window-minimize" />
      <IconButton onClick={maximizeToggle} icons={maximized ? 'fa-window-restore' : 'fa-window-maximize'} />
      <IconButton onClick={companion.close} icons="fa-times" />
    </div>
  </nav>
</div>

<style>
.client-bar {
  height: 30px;
  padding: 5px;
  background-color: rgb(40, 40, 40);
  transition: height 0.5s ease 0s;
  transition: padding 0.25s ease 0s;
}

.buttons-list {
  display: flex;
  -webkit-app-region: no-drag;
}

nav {
  width: 100%;
  height: 17px;
  padding: 0 5px;
  -webkit-app-region: drag;
  display: flex;
  justify-content: space-between;
}
</style>