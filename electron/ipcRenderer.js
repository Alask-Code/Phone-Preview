const { ipcRenderer } = require('electron');

function useIpcRenderer (message, ...args) {
  ipcRenderer.send(message, ...args);
}

module.exports = useIpcRenderer;
