<img align="right" width="100" src="public/images/compy.svg" />

# Companion

[![license][license-badge]](LICENSE.md)
[![npm-version][npm-version]](https://github.com/brunurd/companion/releases)

Did you know Compy the companion? They are a friendly mini browser to pin on top of any other desktop app and keep doing your things while enjoying a live stream or a youtube video.

### Tested services

|Name|Works|Info|
|-|-|-|
|Twitch|:heavy_check_mark:|Ok|
|Youtube|:heavy_check_mark:|Ok|
|SoundCloud|:heavy_check_mark:|Ok|
|Netflix|:x:|DRM problem, needs Widevine|
|DisneyPlus|:x:|DRM problem|

## Downloads
:warning: **Observation:** At the moments the releases are made manually, I need time to create a proper continous distribution automation routine, follow the instruction on [How to Compile](#user-content-how-to-compile) if you want a specific version.

[Windows x64][win-download] | [macOS][mac-download] | [Linux][linux-download]

![Screenshot][screenshot]

_Streamer at the screenshot: [@rawrafaela](https://www.twitch.tv/rawrafaela) member of the [@wakandastreamers](https://www.twitch.tv/team/wakandastreamers) team._

## How to Compile
Pre-requisites:
- Run on the target platform: Windows, MacOS or Linux (In Linux it uses AppImage)
- Node.js

Install dependencies with:
```bash
npm install
```
Run the distribution command:
```bash
# For Linux
npm run dist:linux

# For Windows
npm run dist:win

# For mac
npm run dist:mac
```
[screenshot]: public/images/screenshot.gif
[license-badge]: https://img.shields.io/github/license/brunurd/companion
[npm-version]: https://img.shields.io/github/package-json/v/brunurd/companion
[linux-download]: https://github.com/brunurd/companion/releases/download/v1.5.5/Companion-1.5.5.AppImage
[mac-download]: https://github.com/brunurd/companion/releases/download/v1.5.5/Companion-1.5.5.dmg
[win-download]: https://github.com/brunurd/companion/releases/download/v1.5.5/Companion.1.5.5.exe
