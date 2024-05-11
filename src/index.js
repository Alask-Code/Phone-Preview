const { ipcRenderer } = require('electron');
const { appTitle } = require('./manifest.json');
document.querySelector('.title').innerHTML = appTitle;
setTimeout(() => {
  ipcRenderer.send('setSize', 512, 256);
}, 2000);
