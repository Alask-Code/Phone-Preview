const { ipcRenderer } = require('electron');
const { appTitle } = require('./manifest.json');
document.querySelector('.title').innerHTML = appTitle;

setTimeout(() => {
  ipcRenderer.send('setSize', document.body.offsetWidth, document.body.offsetHeight);
}, 2000);
