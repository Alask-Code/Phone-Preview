const { ipcRenderer } = require('electron');
const { appTitle } = require('./manifest.json');
document.querySelector('.title').innerHTML = appTitle;

document.addEventListener('DOMContentLoaded', () => {
  ipcRenderer.send('setSize', document.body.clientWidth, document.body.clientHeight);
});
