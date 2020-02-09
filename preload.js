const remote = require("electron").remote
const WINDOW = remote.getCurrentWindow()

window["__COMPANION__"] = {
  isAlwaysOnTop: function() { return WINDOW.isAlwaysOnTop() },
  setAlwaysOnTop: function() { 
    let onTop = WINDOW.isAlwaysOnTop()
    WINDOW.setAlwaysOnTop(!onTop)
  },
  minimize: function() { WINDOW.minimize() },
  close: function() { WINDOW.close() },
  maximizeToggle: function() {
    let maximized = WINDOW.isMaximized()
    if (maximized) {
      WINDOW.unmaximize()
    } else {
      WINDOW.maximize()
    }
  },
}