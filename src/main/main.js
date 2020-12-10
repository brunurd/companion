const electron = require('electron');
const { resolve } = require('path');
const fs = require('fs');

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

function loadWindowSetup(screen) {
  const directory = resolve(app.getPath('home'), '.companion');
  const path = resolve(directory, 'window.config.json');

  if (!fs.existsSync(path)) {
    const config = {
      width: 500,
      height: 450,
      x: screen.size.width - 530,
      y: screen.size.height - 550,
    };
    fs.mkdirSync(directory);
    fs.writeFileSync(path, JSON.stringify(config));
    return config;
  }

  const contents = fs.readFileSync(path);
  return JSON.parse(contents);
}

const start = () => {
  screen = electron.screen.getPrimaryDisplay();
  const windowSetup = loadWindowSetup(screen);

  win = new BrowserWindow({
    width: windowSetup.width,
    height: windowSetup.height,
    icon: __dirname + '/images/compy.png',
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.min.js',
      webviewTag: true,
      enableRemoteModule: true,
      worldSafeExecuteJavaScript: true,
      nativeWindowOpen: true,
    },
  });

  const pos = { x: windowSetup.x, y: windowSetup.y };
  const index = resolve(__dirname, 'index.html');
  const fileUrl = `file://${index}`;
  const url = debug ? process.env.ELECTRON_START_URL || fileUrl : fileUrl;

  win.setPosition(pos.x, pos.y);
  win.loadURL(url);
  win.on('closed', () => {
    win = null;
  });

  if (debug) win.webContents.openDevTools();
};

const preventReOpen = () => {
  if (win === null) {
    start();
  }
};

app.on('ready', start);
app.on('activate', preventReOpen);
