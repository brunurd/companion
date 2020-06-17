const { remote } = require('electron');

const win = remote.getCurrentWindow();
let mousePosBefore = remote.screen.getCursorScreenPoint();

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

  isMaximized: function () {
    return win.isMaximized();
  },

  maximizeToggle: function () {
    let maximized = win.isMaximized();
    if (maximized) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  },

  insideWindow: function () {
    const winSize = win.getSize();
    const winPos = win.getPosition();
    const mousePos = remote.screen.getCursorScreenPoint();

    const isColliding =
      mousePos.x > winPos[0] &&
      mousePos.x < winPos[0] + winSize[0] &&
      mousePos.y > winPos[1] &&
      mousePos.y < winPos[1] + winSize[1];

    return isColliding;
  },

  mouseIsIdle: function () {
    const mousePos = remote.screen.getCursorScreenPoint();
    const isIdle =
      mousePosBefore.x == mousePos.x && mousePosBefore.y == mousePos.y;
    mousePosBefore = mousePos;
    return isIdle;
  },

  isFullscreen: function () {
    return win.isFullScreen();
  },
};
