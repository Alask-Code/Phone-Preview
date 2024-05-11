const { ipcMain } = require('electron');
const { log } = require('console');
function registerIpcMain (win) {
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
