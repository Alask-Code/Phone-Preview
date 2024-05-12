const { BrowserWindow } = require('electron');
const { appTitle } = require('./../manifest.json');

function createWindow () {
  const win = new BrowserWindow({
    width: 380,
    height: 680,
    frame: false,
    title: appTitle,
    resizable: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });
  win.removeMenu();
  win.loadFile('index.html');
  return win;
};

module.exports = createWindow;
