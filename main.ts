import { app, BrowserWindow } from 'electron';
import {  } from "electron";
import * as path from 'path';
import * as url from 'url';
import * as winStateKeeper from 'electron-window-state'

let win: any, serve: any;
let splash: any;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function splashWindow() {
  splash = new BrowserWindow({
    width: 600,
    height: 300,
    backgroundColor: '#343a40',
    frame: false
  });
  splash.center();
  splash.setMenu(null);
  splash.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/splash.html'),
    protocol: 'file:',
    // slashes: true
  }));
  splash.on('closed', () => {
    splash = null;
  });
}

function createWindow() {

  let state = winStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 570
  });

  win = new BrowserWindow({
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    icon: path.join(__dirname, 'assets/icons/64x64.png'),
    minWidth: 970,
    minHeight: 570,
    frame: true,
    title: 'PARALOGS',
    show: false,
    backgroundColor: '#343a40',
    webPreferences: {
    nodeIntegration: true,
    },
  });

  win.once('ready-to-show', () => {
    setTimeout(() => {
      splash.close();
      win.show();
      state.manage(win);
    }, 5500);
  });


  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
    // win.setMenu(null);
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      // slashes: true
    }));
  }

  win.on('closed', () => {
    win = null;
    app.quit();
  });
}

try {
  app.on('ready', function() {
    splashWindow();
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
