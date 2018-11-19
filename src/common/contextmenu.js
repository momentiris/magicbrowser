const electron = window.electron;
const { ipcRenderer } = electron;

export const contextMenuSetData = (elem, currentws) => { 
  ipcRenderer.send('selectTab', {
    id: elem.id,
    currentws: currentws
  });
};

export const setContextMenuWorkspaces = workspaces => {
  ipcRenderer.send('listworkspaces', workspaces);
};
