import { useState, useEffect, useMemo } from 'react'
import humanizeDuration, { type Unit } from 'humanize-duration'

import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import {
  faCodeBranch,
  faBarcode,
  faClock,
  faWifi,
  faHourglass,
  faTemperatureHalf,
  faDroplet
} from '@fortawesome/free-solid-svg-icons'

import { loadInfo } from './services/DataService'
import { Info } from './services/types'
import { Data, Settings } from './components'

function App() {
  const [info, setInfo] = useState<Info | null>()

  useEffect(() => {
    async function loadData() {
      const info = await loadInfo()
      setInfo(info)
    }

    const interval = setInterval(async () => {
      await loadData()
      console.log('Logs every minute', info)
    }, 30 * 1000)

    loadData()

    return () => clearInterval(interval)
  }, [])

  const formattedTime = useMemo(() => {
    const time = info?.system.time

    if (time === undefined) {
      return
    }

    const now = new Date(time * 1000)
    return now.toLocaleString()
  }, [info?.system.time])

  const formattedUptime = useMemo(() => {
    const uptime = info?.system.uptime

    if (uptime === undefined) {
      return
    }

    const options = {
      units: ['y', 'mo', 'w', 'd', 'h', 'm'] as Unit[],
      round: true
    }

    return humanizeDuration(uptime * 1000, options)
  }, [info?.system.uptime])

  return (
    <Container className="p-3">
      <h1 className="header">BedRoom Clock ⏰</h1>

      <section id="device-info" className="mb-3">
        <h2>Device Info</h2>
        <ListGroup>
          <ListGroup.Item>
            <Data icon={faCodeBranch} value={info?.version} />
          </ListGroup.Item>
          <ListGroup.Item>
            <Data icon={faBarcode} value={info?.system?.deviceId} />
          </ListGroup.Item>
          <ListGroup.Item>
            <Data icon={faClock} value={formattedTime} />
          </ListGroup.Item>
          <ListGroup.Item>
            <Data icon={faWifi} value={info?.network.wifiQuality} unit="%" />
          </ListGroup.Item>
          <ListGroup.Item>
            <Data icon={faHourglass} value={formattedUptime} />
          </ListGroup.Item>
        </ListGroup>
      </section>

      <section id="sensor-values" className="mb-3">
        <h2>Sensor Values</h2>
        <ListGroup>
          <ListGroup.Item>
            <Data
              icon={faTemperatureHalf}
              value={info?.values?.temp}
              unit="°C"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <Data icon={faDroplet} value={info?.values?.humidity} unit="%" />
          </ListGroup.Item>
        </ListGroup>
      </section>

      <Settings />
    </Container>
  )
}

export default App
