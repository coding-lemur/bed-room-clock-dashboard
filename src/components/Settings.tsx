import { FC, useState, useCallback, useEffect, ChangeEvent } from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'

import { Settings as SettingsType } from '../services/types'
import {
  factoryReset,
  loadSettings,
  restart,
  saveSettings
} from '../services/DataService'

const Settings: FC = () => {
  const [settings, setSettings] = useState<SettingsType | null>()
  const [showFactoryResetConfirmation, setShowFactoryResetConfirmation] =
    useState(false)
  const [showRestartConfirmation, setShowRestartConfirmation] = useState(false)

  useEffect(() => {
    async function loadData() {
      const settings = await loadSettings()
      setSettings(settings)
    }

    loadData()
  }, [])

  const handleBrightnessChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setSettings((oldState) =>
        oldState
          ? {
              ...oldState,
              brightness: Number.parseInt(e.target.value)
            }
          : null
      ),
    []
  )

  const handleScreenOnDistanceChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setSettings((oldState) =>
        oldState
          ? {
              ...oldState,
              screenOnDistance: Number.parseInt(e.target.value)
            }
          : null
      ),
    []
  )

  const handleScreenOnIntervalChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setSettings((oldState) =>
        oldState
          ? {
              ...oldState,
              screenOnInterval: Number.parseInt(e.target.value)
            }
          : null
      ),
    []
  )

  const handleSaveSettings = useCallback(async () => {
    if (!settings) {
      console.debug('skip save settings because no settings available')
      return
    }

    await saveSettings(settings)
  }, [settings])

  const handleFactoryReset = useCallback(async () => {
    setShowFactoryResetConfirmation(false)
    await factoryReset()
  }, [])

  const handleRestart = useCallback(async () => {
    setShowRestartConfirmation(false)
    await restart()

    window.location.reload()
  }, [])

  return (
    <>
      <section id="settings" className="mb-3">
        <h2>Settings</h2>
        <InputGroup className="mb-3">
          <InputGroup.Text>Display Brightness</InputGroup.Text>
          <Form.Control
            type="number"
            min={0}
            max={255}
            aria-label="display brightness"
            value={settings?.brightness}
            onChange={handleBrightnessChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Screen On Distance</InputGroup.Text>
          <Form.Control
            type="number"
            min={0}
            max={255}
            aria-label="screen on distance"
            value={settings?.screenOnDistance}
            onChange={handleScreenOnDistanceChange}
          />
          <InputGroup.Text>cm</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Screen On Interval</InputGroup.Text>
          <Form.Control
            type="number"
            min={0}
            max={255}
            aria-label="screen on interval"
            value={settings?.screenOnInterval}
            onChange={handleScreenOnIntervalChange}
          />
          <InputGroup.Text>ms</InputGroup.Text>
        </InputGroup>

        <ButtonGroup aria-label="action buttons">
          <Button variant="primary" onClick={handleSaveSettings}>
            save settings
          </Button>
          <Button
            variant="secondary"
            onClick={() => setShowRestartConfirmation(true)}
          >
            restart
          </Button>
          <Button
            variant="danger"
            onClick={() => setShowFactoryResetConfirmation(true)}
          >
            factory reset
          </Button>
        </ButtonGroup>
      </section>

      <Modal
        show={showFactoryResetConfirmation}
        onHide={() => setShowFactoryResetConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Factory Reset Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Really, delete all your settings?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFactoryReset}>
            Yes, do factory reset
          </Button>
          <Button
            variant="primary"
            onClick={() => setShowFactoryResetConfirmation(false)}
          >
            No, keep current settings
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showRestartConfirmation}
        onHide={() => setShowRestartConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Restart Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Restart the device?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRestart}>
            Yes, restart
          </Button>
          <Button
            variant="primary"
            onClick={() => setShowRestartConfirmation(false)}
          >
            No, keep running
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Settings
