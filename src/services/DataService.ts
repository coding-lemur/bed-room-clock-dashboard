import { Info, Settings } from './types'

export const loadInfo = async () => {
    const resp = await fetch('/api/info')

    if (!resp.ok) {
        throw new Error('could not load info')
    }

    const info = await resp.json() as Info
    return info
}

export const loadSettings = async () => {
    const resp = await fetch('api/settings')

    if (!resp.ok) {
        throw new Error('could not load settings')
    }

    const settings = await resp.json() as Settings
    return settings
}