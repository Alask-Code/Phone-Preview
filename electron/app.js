process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
const { app } = require('electron');
require('electron-reload')('../');
const createWindow = require('./BrowserWindow');
const registerIpcMain = require('./ipcMain');
app.whenReady().then(() => {
  const win = createWindow();
  registerIpcMain(win);
});
