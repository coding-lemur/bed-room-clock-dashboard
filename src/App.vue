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
          <font-awesome-icon icon="fa-solid fa-temperature-half" /> {{ info?.vales?.temperature ?? 'n.a.' }} °C
        </li>
        <li class="list-group-item">
          <font-awesome-icon icon="fa-solid fa-droplet" /> {{ info?.vales?.humidity ?? 'n.a.' }} %
        </li>
      </ul>
    </section>

    <section id="settings">
      <h2>Settings</h2>

      <div v-show="settings?.brightness">
        <label for="brightness" class="form-label">brightness</label>
        <input type="range" class="form-range" id="brightness" min="0" max="255" :value="this.settings?.brightness"
          @input="e => this.settings.brightness = e.target.value">
      </div>
    </section>

    <section id="admin-actions" class="mb-3">
      <h2>Admin Stuff</h2>

      <button type="button" class="btn btn-primary" @click="saveSettings" :disabled="!settings">Save Settings</button>
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
      info: undefined,
      settings: undefined,

      // timers
      dataTimer: undefined,
      refreshTimer: undefined,
    }
  },
  computed: {
    formatedUptime() {
      if (!this.info?.system?.uptime) {
        return 'n.a.'
      }

      return humanizeDuration(this.uptime * 1000)
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
