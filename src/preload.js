const { remote } = require('electron');

const win = remote.getCurrentWindow();

window['__COMPANION__'] = {
  isAlwaysOnTop: function () {
    return win.isAlwaysOnTop();
  },

  setAlwaysOnTop: function () {
    let onTop = win.isAlwaysOnTop();
    win.setAlwaysOnTop(!onTop);
  },

  minimize: function () {
    win.minimize();
  },

  close: function () {
    win.close();
  },

  maximizeToggle: function () {
    let maximized = win.isMaximized();
    if (maximized) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  },
};
