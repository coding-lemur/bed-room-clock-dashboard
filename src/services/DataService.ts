import type { Info, Settings } from './types'

export const loadInfo = async () => {
  const resp = await fetch('/api/info')

  if (!resp.ok) {
    throw new Error('could not load info')
  }

  const info = (await resp.json()) as Info
  return info
}

export const loadSettings = async () => {
  const resp = await fetch('api/settings')

  if (!resp.ok) {
    throw new Error('could not load settings')
  }

  const settings = (await resp.json()) as Settings
  return settings
}

export const saveSettings = async (settings: Settings) => {
  const resp = await fetch("/api/settings", {
    method: "POST", headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(settings)
  })

  if (!resp.ok) {
    throw new Error('save settings fail')
  }
}

export const restart = async () => {
  const resp = await fetch('/api/restart', { method: 'POST' })

  if (!resp.ok) {
    throw new Error('could not restart the device')
  }
}

export const factoryReset = async () => {
  const resp = await fetch('/api/hard-reset', { method: 'POST' })

  if (!resp.ok) {
    throw new Error('hard-reset fail')
  }
}