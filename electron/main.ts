import { app, BrowserWindow, Menu } from "electron"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isDev = !app.isPackaged

Menu.setApplicationMenu(null)

function createWindow() {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		title: "ShadShelf",
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: false,
			contextIsolation: true,
		},
	})

	if (isDev) {
		win.loadURL("http://localhost:5173")
		win.webContents.openDevTools()
	} else {
		win.loadFile(path.join(__dirname, "../dist/index.html"))
	}

	win.webContents.on("before-input-event", (_, input) => {
		if (input.key === "F11" && input.type === "keyDown") {
			win.setFullScreen(!win.isFullScreen())
		}
		if (isDev && input.control && input.shift && input.key.toLowerCase() === "j" && input.type === "keyDown") {
			win.webContents.toggleDevTools()
		}
	})
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit()
})

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
