const { appTitle } = require('./manifest.json');
document.querySelector('.title').innerHTML = appTitle;
setTimeout(() => {
  const useIpcRenderer = require('./electron/ipcRenderer');
  console.log(useIpcRenderer);
  useIpcRenderer('resize', [100, 200]);
}, 5000);
