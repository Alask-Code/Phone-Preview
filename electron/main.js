const { app } = require('electron');
require('electron-reload')('../');
const createWindow = require('./BrowserWindow');

app.whenReady().then(() => {
  createWindow();
});
