# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).


## [1.6.0] - 2022-
### Fix
- Security updates: bump ajv from 6.12.2 to 6.12.6
- Security updates: bump electron from 11.5.0 to 13.6.6
- Replace WebviewTag by BrowserView
- Replace electron.remote by @electron/remote

## [1.5.9] - 2021-11-17
### Fix
- Bump Electron version to 11.5.0 for security reasons.

## [1.5.8] - 2021-09-27
### Fix
- Node.js security fixes (ansi-regex updated on package-lock).
- Node.js security fixes (path-parse updated on package-lock).

## [1.5.7] - 2021-08-07
### Fix
- Node.js security fix: [https://github.com/advisories/GHSA-5fg8-2547-mr8q](https://github.com/advisories/GHSA-5fg8-2547-mr8q)

## [1.5.6] - 2021-06-29

### Added
- Show version of the Companion app in the client bar

### Fix
- Mute toggle button don't overlap the search text input
- Security updates

---

## [1.5.5] - 2021-02-01

### Changes
- Update electron and other modules recomendations

### Fix
- Fake user-agent as chrome to use in google account validation

---

## [1.5.4] - 2020-12-10

### Added
- Sound on/off button.
- Store the current window size and position.

### Fix
- Development start command open two instance of the window.
- The `ini` npm package before version 1.3.6 has a Prototype Pollution vulnerability.

---

## [1.5.3] - 2020-10-20

### Changed

- Eslint config.
- Jest config.
- Allow pop ups.

### Removed

- Removed the prettier.


---

## [1.5.2] - 2020-06-23

### Added

- Use localStorage to restore the last visited url.

### Changed

- Project renamed to `companion`.
- Compy as project icon.

---

## [1.5.1] - 2020-06-17

### Added

- `svelte-preprocess` added.
- WebStorm JetBrains `.idea/` folder.

### Changed

- Separate the source by it electron process, main in `src/main` and `src/renderer`.
- Style: moving css to components.
- Stop remote warning.

---

## [1.5.0] - 2020-06-16

### Added

- Svelte rollup build setup.
- HTML moved to svelte components.
- SearchBar component js.
- Svelte store with url and webview reference.
- WebView component js.
- Show and hide logic moved to App component.
- ClientBar component js.

### Changed

- fix: Always hide app bar in the fullscreen.
- fix: 1s inside the window to show app bar.
- fix: 3s out of the window to hide app bar.

### Removed

- removing scripts.js from document.
- scripts.js deleted.

---

## [1.4.1] - 2020-06-11

### Changed

- Fix: hide app bar on mouse idle only in fullscreen.
- Fix: different functions and timers for hide and show app bar.
- Fix: Quit app in macOS on window close.

---

## [1.4.0] - 2020-06-10

### Added

- Dev: CHANGELOG.md file.
- Dev: Prettier formatter setup.
- Dev: Stylus css pre-processor.
- Dev: Rollup module bundler for main and preload files.
- Dev: Hot reload with `npm start`.
- Tests: Jest test suit added.
- LICENSE.md

### Changed

- Feature: Hide and show app bar on mouse action over window.
