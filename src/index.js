const { appTitle } = require('./manifest.json');
document.querySelector('.title').innerHTML = appTitle;

const useIpcRenderer = require('./electron/ipcRenderer');

useIpcRenderer('resize');
