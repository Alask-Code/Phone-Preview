const { ipcMain } = require('electron');

function registerIpcMain (win) {
  ipcMain.on('open-dev-tools', () => {
    win.openDevTools();
  });
  ipcMain.on('resize', (width, height) => {
    win.setSize(width, height);
  });
}
module.exports = registerIpcMain;
