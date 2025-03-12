import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { PathLike } from 'node:fs'
import { launchMinecraft } from '../main/launcher'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('electronAPI', {
      getProfile: (filePath: PathLike) => ipcRenderer.invoke('getProfile', filePath),
      launchMinecraft: () => ipcRenderer.invoke('launchMinecraft')
      loadProfiles: (folderPath: PathLike) => ipcRenderer.invoke('loadProfiles', folderPath)
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
