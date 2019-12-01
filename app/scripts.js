const bar = document.querySelector('.yt-client-bar')
const remote = require('electron').remote
const WINDOW = remote.getCurrentWindow()

let webview = document.querySelector('.yt-webview')
let searchForm = document.querySelector('.search-bar')
let searchInput = document.querySelector('#search-input')
let searchSubmitButton = document.querySelector('.search-bar-item')
let prevBtn = document.querySelector('.prev-btn')
let refreshBtn = document.querySelector('.refresh-btn')
let nextBtn = document.querySelector('.next-btn')
let maximized = false

const hideBar = () => {
  bar.style.height = '0'
  bar.style.padding = '0'
}

const showBar = () => {
  bar.style.height = '30px'
  bar.style.padding = '5px'
}

const pin = () => {
  let icon = document.querySelector('.js-pin')
  console.log(icon)
  if (WINDOW.isAlwaysOnTop()) {
    icon.classList.remove('fa-lock')
    icon.classList.add('fa-unlock')
    WINDOW.setAlwaysOnTop(false)
  } else {
    icon.classList.remove('fa-unlock')
    icon.classList.add('fa-lock')
    WINDOW.setAlwaysOnTop(true)
  }
}

const minimizeWindow = () => {
  WINDOW.minimize()
}

const prev = () => {
  webview.goBack()
  nextBtn.classList.remove('inactive')
}

const next = () => {
  webview.goForward()
  prevBtn.classList.remove('inactive')
}

const refresh = (url) => {
  if (typeof url === 'undefined' || url === '')
    url = 'https://m.youtube.com'

  if (!url.includes('http'))
    url = 'https://' + url

  searchInput.value = url

  webview.remove()
  webview = document.createElement('WEBVIEW')
  webview.src = url
  webview.classList.add('yt-webview')
  document.body.appendChild(webview)
}

const closeWindow = () => {
  WINDOW.close()
}

const maximizeToggle = () => {
  if (maximized)
  {
    WINDOW.unmaximize()
  } else {
    WINDOW.maximize()
  }
  maximized = !maximized
}

const checkHistoryButtons = () => {
  if (webview.canGoBack()) {
    prevBtn.classList.remove('inactive')
    refreshBtn.classList.remove('inactive')
  } else {
    prevBtn.classList.add('inactive')
    refreshBtn.classList.add('inactive')
  }
  if (webview.canGoForward()) {
    nextBtn.classList.remove('inactive')
  } else {
    nextBtn.classList.add('inactive')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.setInterval(checkHistoryButtons, 1000)
  searchForm.addEventListener('submit', e => {
    e.preventDefault()
    searchSubmitButton.click()
    return false
  })
})