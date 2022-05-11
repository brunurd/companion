const { remote } = require('electron');
// TODO: use: const { BrowserWindow } = require('@electron/remote');
// https://github.com/electron/remote
const { resolve } = require('path');
const fs = require('fs');

const win = remote.getCurrentWindow();
const os = process.platform;
let mousePosBefore = remote.screen.getCursorScreenPoint();

function saveWindowSetup() {
  const directory = resolve(remote.app.getPath('home'), '.companion');
  const path = resolve(directory, 'window.config.json');

  if (!fs.existsSync(path)) {
    fs.mkdirSync(directory);
  }

  const winSize = win.getSize();
  const winPos = win.getPosition();

  const config = {
    width: winSize[0],
    height: winSize[1],
    x: winPos[0],
    y: winPos[1],
  };

  fs.writeFile(path, JSON.stringify(config), {}, () => {});
  return config;
};

function getAppInfoText() {
  const version = remote.app.getVersion();
  return `Companion v${version}`;
}

win.on('resize', saveWindowSetup);
win.on('move', saveWindowSetup);

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

  os: function () {
    return os;
  },

  getAppInfoText: function() {
    return getAppInfoText();
  },
};
