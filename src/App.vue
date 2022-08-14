<template>
  <div class="container">
    <h1 class="mb-3">Bedroom Clock</h1>

    <section id="device-info" class="mb-3">
      <h2>Device Info</h2>

      <div>version: <span class="value">{{ version }}</span></div>
      <div>device ID: <strong class="value">{{ deviceId }}</strong></div>

      <div>
        wifi signal:
        <span class="value">{{ wifiQuality }}</span>
      </div>
      <div>time: <span class="value">n.a.</span></div>
      <div>
        uptime:
        <span class="value">{{ uptime }}</span>
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
      uptime: undefined,
      timer: undefined,
    }
  },
  methods: {
    async loadData() {
      console.log('🍓')

      const resp = await fetch('/api/info')
      const data = await resp.json()
      const { system, network } = data

      this.version = data.version
      this.deviceId = system.deviceId
      this.wifiQuality = network.wifiQuality
      this.uptime = humanizeDuration(system.uptime * 1000)
    }
  },
  beforeMount() {
    this.timer = setInterval(this.loadData(), 30000)
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
}
</script>

<style>
</style>
