const {app, BrowserWindow, ipcMain} = require('electron');
const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');
require('dotenv').load();


ipcMain.on('update-notify-value', function (event, arg) {
  win.webContents.send('targetPriceVal', 'from main');
});

let win;
function createWindow () {
  console.log('log definately working');

  win = new BrowserWindow({
    width: 1000, height: 700, transparent: false,
    webPreferences: { // <--- (1) Additional preferences
      nodeIntegration: false,
      preload: __dirname + '/preload.js' // <--- (2) Preload script
    }
  });


  win.loadURL(process.env.ELECTRON_LOAD_URL || 'http://localhost:3000'); // <--- (3) Loading react
  //  win.loadURL(url.format({
  //   pathname: path.join(__dirname, '../src/TABS/main.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))

  win.webContents.openDevTools();


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
