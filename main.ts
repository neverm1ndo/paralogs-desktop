import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as winStateKeeper from 'electron-window-state'

let win: any, serve: any;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function createWindow() {

  // const electronScreen = screen;
  // const size = electronScreen.getPrimaryDisplay().workAreaSize;

  let state = winStateKeeper({
    defaultWidth: 1200,
    defaultHeight: 650
  });

  // Create the browser window.
  win = new BrowserWindow({
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    icon: path.join(__dirname, 'assets/icons/64x64.png'),
    minWidth: 1200,
    minHeight: 650,
    frame: true,
    title: 'PARALOGS',
    show: false,
    backgroundColor: '#343a40',
    webPreferences: {
    nodeIntegration: true,
    },
  });

  win.once('ready-to-show', () => {
    win.show();
    state.manage(win);
  });


  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  if (serve) {
    win.webContents.openDevTools();
  }

  win.on('closed', () => {
    win = null;
  });
}

try {
  app.on('ready', function() {
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

} catch (e) {
  console.error(e);
}
