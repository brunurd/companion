<script>
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
  <nav class="client-m drag">
    <div class="client-m__btns--left">
      <span class="client-m__btn click" on:click={pinToggle}>
        <i class="fa {pinned ? 'fa-lock' : 'fa-unlock'}"></i>
      </span>
    </div>
    <div class="client-m__btns--right">
      <span class="client-m__btn click" on:click={companion.minimize}>
        <i class="fa fa-window-minimize"></i>
      </span>
      <span class="client-m__btn click" on:click={maximizeToggle}>
        <i class="fa {maximized ? 'fa-window-restore' : 'fa-window-maximize'}"></i>
      </span>
      <span class="client-m__btn click" on:click={companion.close}>
        <i class="fa fa-times"></i>
      </span>
    </div>
  </nav>
</div>