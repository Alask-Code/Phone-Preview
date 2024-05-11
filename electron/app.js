process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
require('electron-reload')('../');

const { app } = require('electron');
app.whenReady().then(() => {
  const createWindow = require('./BrowserWindow');
  const win = createWindow();

  const registerIpcMain = require('./ipcMain');
  registerIpcMain(win);
});
