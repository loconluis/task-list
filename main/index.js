// Modules to control application life and create native browser window
const {app, BrowserWindow, Tray} = require('electron')
const prepareNext = require('electron-next')
const isDev = require('electron-is-dev')
const path = require('path');
const { resolve: resolvePath } = require('app-root-path')


const devPath = 'http://localhost:8000/start'
const prodPath = path.resolve('renderer/out/start/index.html')
const entry = isDev ? devPath : 'file://' + prodPath
const iconName = 'dot'
const iconPath = resolvePath(`./main/static/tray/${iconName}.png`);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let tray = null
// Create the main window
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    // width: 315,
    // height: 400,
    width: 815,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    // frame: false,
    resizable: false,
    // show: false,
  })

  // and load the index.html of the app.
  mainWindow.loadURL(entry)
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// Toggle window thru Tray
function toggleWindow (window, tray) {
  tray.on('click', (event, bounds) => {
    const { x, y } = bounds;
    const { height, width } = window.getBounds();
    const _x = Math.round(x - (width / 2));
    if(window.isVisible()) {
      window.hide() 
    } else {
      window.setBounds({
        x: _x,
        y,
        height,
        width
      })
      window.show()
    }
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on('ready', createWindow)
app.on('ready', async () => {
  await prepareNext('./renderer')
  createWindow()
  tray = new Tray(iconPath);
  tray.setToolTip('Taskr')
  toggleWindow(mainWindow, tray);
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
