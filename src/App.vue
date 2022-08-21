<template>
  <div class="container">
    <h1 class="mb-3">Bedroom Clock</h1>

    <section id="device-info" class="mb-3">
      <h2>Device Info</h2>

      <ul class="list-group">
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-code-branch" /> {{ version ?? 'n.a.' }}
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-barcode" /> {{ deviceId ?? 'n.a.' }}
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-clock" /> n.a.
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-wifi" /> {{ wifiQuality ?? '0' }} %
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-hourglass" /> {{ formatedUptime }}
        </li>
      </ul>
    </section>

    <section id="sensor-values" class="mb-3">
      <h2>Sensor Values</h2>

      <ul class="list-group">
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-temperature-half" /> {{ temperature ?? 'n.a.' }} °C
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-droplet" /> {{ humidity ?? 'n.a.' }} %
        </li>
      </ul>
    </section>

    <section id="settings">
      <h2>Settings</h2>

      <label for="brightness" class="form-label">brightness</label>
      <input type="range" class="form-range" id="brightness" min="0" max="100" :value="brightness"
        @input="e => this.brightness = e.target.value">
    </section>

    <section id="admin-actions" class="mb-3">
      <h2>Admin Stuff</h2>

      <button type="button" class="btn btn-primary" @click="saveSettings">Save Settings</button>
      <button type="button" class="btn btn-danger ms-2" @click="hardReset">Hard Reset</button>
    </section>
  </div>
</template>

<script>
import humanizeDuration from 'humanize-duration'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data() {
    return {
      version: undefined,
      deviceId: undefined,
      wifiQuality: undefined,
      uptime: undefined, // in seconds
      temperature: undefined,
      humidity: undefined,

      // timers
      dataTimer: undefined,
      refreshTimer: undefined,

      // settings
      brightness: undefined,
    }
  },
  computed: {
    formatedUptime() {
      return humanizeDuration(this.uptime * 1000)
    },
  },
  methods: {
    async loadInfo() {
      const resp = await fetch('/api/info')
      const data = await resp.json()
      const { system, network, values } = data

      if (!this.version) {
        this.version = data.version
      }

      if (!this.deviceId) {
        this.deviceId = system.deviceId
      }

      this.wifiQuality = network.wifiQuality

      if (!this.uptime) {
        this.uptime = system.uptime
      }

      this.temperature = values.temp
      this.humidity = values.humidity
    },
    async loadSettings() {
      const resp = await fetch("/api/settings")

      if (!resp.ok) {
        return
      }

      const settings = await resp.json()
      this.brightness = settings.brightness
    },
    async saveSettings() {
      const payload = { brightness: this.brightness }
      const resp = await fetch("/api/settings", {
        method: "POST", headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify(payload)
      })

      if (!resp.ok) {
        console.error('save settings fail')
      }
    },
    refreshUptime() {
      if (!this.uptime) {
        return
      }

      this.uptime++
    },
    async hardReset() {
      // TODO show confirmation dialog
      const resp = await fetch('/api/hard-reset', { method: 'POST' })

      if (!resp.ok) {
        console.error('hard-reset fail')
      }
    },
  },
  beforeMount() {
    this.dataTimer = setInterval(async () => { await this.loadInfo() }, 30000)
    this.refreshTimer = setInterval(this.refreshUptime, 1000)

    this.loadInfo()
    this.loadSettings()
  },
  beforeUnmount() {
    clearInterval(this.refreshTimer)
    clearInterval(this.dataTimer)
  }
}
</script>

<style>
</style>
