import Info from "./types/Info"

export const loadInfo =  async () => {
    const resp = await fetch('/api/info')
    
    if (!resp.ok) {
        throw new Error('could not load info')
    }

    const info = await resp.json() as Info
    return info
}
