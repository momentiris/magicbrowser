const electron = window.electron;
const { ipcRenderer } = electron;
const remote = electron.remote;

const fs = remote.require('fs');
export const contextMenuSetData = (elem, currentws) => {
  ipcRenderer.send('selectTab', {
    id: elem.id,
    currentws: currentws
  });
};

export const setContextMenuWorkspaces = workspaces => {

  ipcRenderer.send('listworkspaces', workspaces);
};

export const saveTabSnapshot = () => {
  // const currentWindow = remote.getCurrentWindow();
  // const winSize = currentWindow.webContents.getOwnerBrowserWindow().getBounds();
  // setTimeout(() => {
  //   let capturedPicFilePath = './';
  //   currentWindow.capturePage(
  //     {
  //       x: 0,
  //       y: 80,
  //       width: winSize.width,
  //       height: winSize.height
  //     },
  //     (img) => {
  //
  //       fs.writeFile('test.png', img.resize({width:500, height: 250}).toPNG(), () =>
  //         console.log(`Saved ${capturedPicFilePath}`));
  //     });
  // }, 200);
};
