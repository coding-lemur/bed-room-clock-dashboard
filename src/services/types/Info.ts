export type Info = {
    version: string
    system: {
        deviceId: string
        freeHeap: number
        uptime: number
        time: number
    }
    fileSystem: {
        totalBytes: number
        usedBytes: number
    }
    network: {
        wifiRssi: number
        wifiQuality: number
        wifiSsid: string
        id: string
        mac: string
    }
    player: {
        isPlaying: boolean
        codec: string
        bitrate: number
        volume: number
    }
    values: {
        temp: number
        humidity: number
    }
}
