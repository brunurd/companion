<script>

import IconButton from './IconButton.svelte';

const companion = window.__COMPANION__;
const isDarwin = companion.os() === 'darwin';
const rowClass = isDarwin ? 'reverse-row' : '';
const title = companion.getAppInfoText();

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
  <nav class="{rowClass}">
    <div class="buttons-list">
      <IconButton onClick={pinToggle} icons={pinned ? 'fa-lock' : 'fa-unlock'} />
    </div>
    <p class="app-title">{title}</p>
    <div class="buttons-list {rowClass}">
      <IconButton onClick={companion.minimize} icons="fa-window-minimize" />
      <IconButton onClick={maximizeToggle} icons={maximized ? 'fa-window-restore' : 'fa-window-maximize'} margin="0 10px" />
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
  flex-direction: row;
  -webkit-app-region: no-drag;
}

.reverse-row {
  flex-direction: row-reverse;
}

nav {
  width: 100%;
  height: 17px;
  padding: 0 5px;
  -webkit-app-region: drag;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-title {
  text-align: center;
  color: rgba(245, 245, 245, 0.3);
  font-weight: 700;
  margin: 0;
  font-size: 0.7em;
}
</style>