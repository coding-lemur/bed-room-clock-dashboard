<template>
  <div class="container">
    <h1 class="mb-3">Bedroom Clock</h1>

    <section id="device-info" class="mb-3">
      <h2>Device Info</h2>

      <div>version: <span class="value">{{ version }}</span></div>
      <div>device ID: <strong class="value">{{ deviceId }}</strong></div>

      <div>
        wifi signal:
        <span class="value">{{ wifiQuality }}%</span>
      </div>
      <div>time: <span class="value">n.a.</span></div>
      <div>
        uptime:
        <span class="value">{{ formatedUptime }}</span>
      </div>
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

      // timers
      dataTimer: undefined,
      uptimeTimer: undefined,
    }
  },
  computed: {
    formatedUptime() {
      return humanizeDuration(this.uptime * 1000)
    },
  },
  methods: {
    async loadData() {
      const resp = await fetch('/api/info')
      const data = await resp.json()
      const { system, network } = data

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
    },
    updateUptime() {
      if (!this.uptime) {
        return
      }

      this.uptime++
    }
  },
  beforeMount() {
    this.dataTimer = setInterval(async () => { await this.loadData() }, 30000)
    this.uptimeTimer = setInterval(this.updateUptime, 1000)

    this.loadData()
  },
  beforeUnmount() {
    clearInterval(this.uptimeTimer)
    clearInterval(this.dataTimer)
  }
}
</script>

<style>
</style>
