const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 480,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `dist/apps/cpu-info-ui/index.html`),
      protocol: 'file:',
      slashes: true
    })
  );
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});
