const bar = document.querySelector('.yt-client-bar')
    , remote = require('electron').remote
    , WINDOW = remote.getCurrentWindow()
let webview = document.querySelector('.yt-webview')

const hideBar = ()=> {
  bar.style.height = '0'
  bar.style.padding = '0'
}

const showBar = ()=> {
  bar.style.height = '30px'
  bar.style.padding = '5px'
}

const pin = ()=> {
  let icon = document.querySelector('.js-pin')
  console.log(icon)
  if (WINDOW.isAlwaysOnTop()) {
    icon.classList.remove('fa-lock')
    icon.classList.add('fa-unlock')
    WINDOW.setAlwaysOnTop(false)
  }
  else {
    icon.classList.remove('fa-unlock')
    icon.classList.add('fa-lock')
    WINDOW.setAlwaysOnTop(true)
  }
}

const minimizeWindow = ()=> {
  WINDOW.minimize()
}

const refresh = ()=> {
  webview.remove()
  webview = document.createElement('WEBVIEW')
  webview.src = 'https://m.youtube.com'
  webview.classList.add('yt-webview')
  document.body.appendChild(webview)
}

const closeWindow = ()=> {
  WINDOW.close()
}