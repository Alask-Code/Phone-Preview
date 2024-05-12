const { ipcMain } = require('electron');

function registerIpcMain (win) {
  ipcMain.on('minimize', () => {
    win.minimize();
  });
  ipcMain.on('close', () => {
    win.close();
  });
  ipcMain.on('open-dev-tools', () => {
    win.openDevTools();
  });
  ipcMain.on('setSize', (event, ...args) => {
    const w = args[0];
    const h = args[1];

    win.setSize(w, h, true);
  });
}

module.exports = registerIpcMain;
