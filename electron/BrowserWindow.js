const { BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 380,
    height: 680,
    title: 'My App',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  });

  win.removeMenu();
  win.loadFile('index.html');
};

module.exports = createWindow;
