const electron = require('electron')
    , app = electron.app
    , BrowserWindow =electron.BrowserWindow

  let WINDOW = null
    , SCREEN = null

const start = ()=> {
  WINDOW = new BrowserWindow({
    width:1000,
    height:600,
    icon: __dirname + '/app/images/yt_logo_rgb_light.png',
    //minWidth: 500,
    //minHeight: 300,
    frame:false
  })
  SCREEN = electron.screen.getPrimaryDisplay()
  let pos = {
    x : SCREEN.size.width - 1030,
    y : SCREEN.size.height - 700
  }
  WINDOW.setPosition(pos.x, pos.y)
  WINDOW.loadURL('file://' + __dirname + '/app/index.html')
  WINDOW.on('closed', ()=> { window = null })
  if (process.argv[2] !== 'undefined') {
    if (process.argv[2] === 'debug')
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