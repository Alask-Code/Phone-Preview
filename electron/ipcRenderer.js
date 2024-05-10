const { ipcRenderer } = require('electron');

function useIpcRenderer (message) {
  ipcRenderer.send(message);
}

module.exports = useIpcRenderer;
