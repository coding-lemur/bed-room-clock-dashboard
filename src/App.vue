<template>
  <div class="container">
    <h1 class="mb-3">Bedroom Clock</h1>

    <section id="device-info" class="mb-3">
      <h2>Device Info</h2>

      <ul class="list-group">
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-code-branch" /> {{ info?.version ?? 'n.a.' }}
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-barcode" /> {{ info?.system?.deviceId ?? 'n.a.' }}
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-clock" /> {{ formatedTime ?? 'n.a.' }}
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-wifi" /> {{ info?.network?.wifiQuality ?? 'n.a.' }} %
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
          <font-awesome-icon icon="fa-solid fa-temperature-half" /> {{ info?.values?.temp ?? 'n.a.' }} °C
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-droplet" /> {{ info?.values?.humidity ?? 'n.a.' }} %
        </li>
      </ul>
    </section>

    <section id="settings">
      <h2>Settings</h2>

      <div>
        <label for="brightness" class="form-label">brightness</label>
        <input type="range" class="form-range" id="brightness" min="0" max="255" :value="this.settings?.brightness"
          @input="e => this.settings.brightness = e.target.value">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">screen on distance</span>
        <input type="number" min="0" max="255" class="form-control" :value="this.settings?.screenOnDistance"
          @input="e => this.settings.screenOnDistance = e.target.value" aria-label="screen on distance"
          aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">cm</span>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">screen on interval</span>
        <input type="number" min="0" max="300000" class="form-control" :value="this.settings?.screenOnInterval"
          @input="e => this.settings.screenOnInterval = e.target.value" aria-label="screen on interval"
          aria-describedby="basic-addon2">
        <span class="input-group-text" id="basic-addon2">ms</span>
      </div>
    </section>

    <section id="admin-actions" class="mb-3">
      <h2>Admin Stuff</h2>

      <button type="button" class="btn btn-primary" @click="saveSettings" :disabled="!settings">Save Settings</button>
      <button type="button" class="btn btn-secondary ms-2" @click="restart">Restart</button>
      <button type="button" class="btn btn-danger ms-2" @click="hardReset">Factory reset</button>
    </section>

    <section>
      <font-awesome-icon icon="fa-brands fa-github" /> <a href="https://github.com/coding-lemur/bed-room-clock"
        target="_blank">https://github.com/coding-lemur/bed-room-clock</a>
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
      info: undefined,
      settings: undefined,

      // timers
      dataTimer: undefined,
    }
  },
  computed: {
    formatedUptime() {
      if (!this.info?.system?.uptime) {
        return 'n.a.'
      }

      const uptimeMs = this.info.system.uptime * 1000
      const options = {
        units: ['y', 'mo', 'w', 'd', 'h', 'm'],
        round: true
      }

      return humanizeDuration(uptimeMs, options)
    },
    formatedTime() {
      if (!this.info?.system?.time) {
        return 'n.a.'
      }

      const now = new Date(this.info.system.time * 1000)
      return now.toLocaleString()
    }
  },
  methods: {
    async loadInfo() {
      const resp = await fetch('/api/info')

      if (!resp.ok) {
        return
      }

      this.info = await resp.json()
    },
    async loadSettings() {
      const resp = await fetch("/api/settings")

      if (!resp.ok) {
        return
      }

      this.settings = await resp.json()
    },
    async saveSettings() {
      const resp = await fetch("/api/settings", {
        method: "POST", headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify(this.settings)
      })

      if (!resp.ok) {
        console.error('save settings fail')
      }
    },
    async hardReset() {
      // TODO show confirmation dialog
      const resp = await fetch('/api/hard-reset', { method: 'POST' })

      if (!resp.ok) {
        console.error('hard-reset fail')
      }
    },
    async restart() {
      const resp = await fetch('/api/restart', { method: 'POST' })

      if (!resp.ok) {
        console.error('restart fail')
      }
    }
  },
  beforeMount() {
    this.dataTimer = setInterval(async () => { await this.loadInfo() }, 30000)

    this.loadInfo()
    this.loadSettings()
  },
  beforeUnmount() {
    clearInterval(this.dataTimer)
  }
}
</script>

<style>

</style>
