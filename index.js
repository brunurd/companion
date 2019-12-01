const electron = require('electron')
    , app = electron.app
    , BrowserWindow =electron.BrowserWindow

  let WINDOW = null
    , SCREEN = null

const start = ()=> {
  WINDOW = new BrowserWindow({
    width: 500,
    height: 450,
    icon: __dirname + '/app/images/yt_logo_rgb_light.png',
    frame:false
  })
  SCREEN = electron.screen.getPrimaryDisplay()
  let pos = {
    x : SCREEN.size.width - 530,
    y : SCREEN.size.height - 550
  }
  WINDOW.setPosition(pos.x, pos.y)
  WINDOW.loadURL('file://' + __dirname + '/app/index.html')
  WINDOW.on('closed', ()=> { window = null })
  if (process.argv[2] !== 'undefined') {
    if (process.argv.includes('debug'))
      WINDOW.webContents.openDevTools()
  }
}

const macOSXClose = ()=> {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

const preventReOpen = ()=> {
  if (WINDOW === null) {
    start()
  }
}

app.on('ready',start)
app.on('window-all-closed', macOSXClose)
app.on('activate', preventReOpen)