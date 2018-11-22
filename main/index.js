const {app, BrowserWindow, ipcMain, Menu} = require('electron');
const fs = require('fs');
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');
require('dotenv').load();

let win;
let workspaces;
let selectedTab;
let currentws;
ipcMain.on('selectTab', (e, data) => {
  selectedTab = data.id;
  currentws = data.currentws;
  // const win_size = win.getSize();
  // const win_height = win_size[0];
  // const win_width = win_size[1];
  // setTimeout(() => {
  //   let capturedPicFilePath = __dirname + '/tmptabimg';
  //
  //   win.capturePage(
  //     {
  //       x: 200,
  //       y: 80,
  //       width: win_width,
  //       height: win_height
  //     },
  //     (img) => {
  //       fs.writeFile(capturedPicFilePath+'.png', img.toPNG(), () =>
  //         console.log(`Saved ${capturedPicFilePath}`));
  //     });
  // }, 500);
});

const moveTabsToWorkspace = (ws) => {
  const payload = {
    current: currentws,
    target: ws,
    id: selectedTab
  };

  win.webContents.send('moveTabs', payload);
};

ipcMain.on('listworkspaces', function (event, arg) {
  workspaces = arg;
  require('electron-context-menu')({
    prepend: (params, browserWindow) =>
      [
        {
          label: 'Close tab'
        },
        {
          label: 'Duplicate tab'
        },
        {
          label: 'Move to workspace',
          'submenu': workspaces.map((ws, current) => ({
            label: ws,
            click() {
              moveTabsToWorkspace(ws);
            }
          }))
        },

      ]
  });
});





function createWindow () {
  console.log('log definately working');

  win = new BrowserWindow({
    titleBarStyle: 'hiddenInset',
    width: 1200, height: 800, transparent: false,
    webPreferences: { // <--- (1) Additional preferences
      nodeIntegration: true,
      preload: __dirname + '/preload.js' // <--- (2) Preload script
    }
  });

  win.loadURL(process.env.ELECTRON_LOAD_URL || 'http://localhost:3000'); // <--- (3) Loading react

  // win.loadURL('http://localhost:3000/dashboard'); // <--- (3) Loading react

  win.on('closed', () => {
    win = null;
  });

  ipcMain.on('show-message', (event, msg) => {
    if (win) {
      console.log('hej');
      win.webContents.send('show-message', msg);
    }
  });
};



app.on('ready', () => {
  installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  createWindow();


});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function setMainMenu() {
  const template = [
    {
      label: 'Filter',
      submenu: [
        {
          label: 'Hello',
          accelerator: 'Shift+CmdOrCtrl+H',
          click() {
              console.log('Oh, hi there!')
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
