const { BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 380,
    height: 680,
    title: 'Phone Preview',
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
