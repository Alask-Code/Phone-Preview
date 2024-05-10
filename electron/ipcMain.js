const { ipcMain } = require('electron');

function registerIpcMain (win) {
  ipcMain.on('open-dev-tools', () => {
    win.openDevTools();
  });
  ipcMain.on('resize', () => {
    win.setSize(10, 10);
  });
}
module.exports = registerIpcMain;
