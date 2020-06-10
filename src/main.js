const electron = require('electron');
const { resolve } = require('path');
const { app, BrowserWindow } = electron;

let win = null;
let screen = null;

const debug =
  process.argv[2] !== 'undefined' ? process.argv.includes('debug') : false;

if (debug) {
  require('electron-reload')(__dirname, {
    electron: resolve(__dirname, '..', 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit',
  });
}

const start = () => {
  win = new BrowserWindow({
    width: 500,
    height: 450,
    icon: __dirname + '/images/yt_logo_rgb_light.png',
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.min.js',
      webviewTag: true,
    },
  });

  screen = electron.screen.getPrimaryDisplay();

  let pos = {
    x: screen.size.width - 530,
    y: screen.size.height - 550,
  };

  win.setPosition(pos.x, pos.y);
  win.loadURL('file://' + __dirname + '/index.html');
  win.on('closed', () => {
    win = null;
  });

  if (debug) win.webContents.openDevTools();
};

const macOSXClose = () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
};

const preventReOpen = () => {
  if (win === null) {
    start();
  }
};

app.on('ready', start);
app.on('window-all-closed', macOSXClose);
app.on('activate', preventReOpen);
