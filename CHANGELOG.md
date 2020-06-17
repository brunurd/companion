# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.?.?] - ???

### Added

- `svelte-preprocess` added.

### Changed

- Separate the source by it electron process, main in `src/main` and `src/renderer`.

### Removed

- ?

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
