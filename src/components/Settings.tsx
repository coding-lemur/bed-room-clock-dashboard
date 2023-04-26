import { FC, useState, useCallback, useEffect, ChangeEvent } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Settings as SettingsType } from '../services/types';
import { loadSettings } from '../services/DataService';

type SettingsProps = {
}

const Settings: FC<SettingsProps> = ({ }) => {
    const [settings, setSettings] = useState<SettingsType | null>()

    useEffect(() => {
        async function loadData() {
            const data = await loadSettings()
            console.log('🥚', data)
            setSettings(data)
        }

        loadData()
    }, [])

    const handleBrightnessChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>
        setSettings(oldState => oldState ? ({
            ...oldState,
            brightness: Number.parseInt(e.target.value),
        }) : null), [])

    const handleScreenOnDistanceChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>
        setSettings(oldState => oldState ? ({
            ...oldState,
            screenOnDistance: Number.parseInt(e.target.value),
        }) : null), [])

    const handleScreenOnIntervalChange = useCallback((e: ChangeEvent<HTMLInputElement>) =>
        setSettings(oldState => oldState ? ({
            ...oldState,
            screenOnInterval: Number.parseInt(e.target.value),
        }) : null), [])

    return <section id='settings' className='mb-3'>
        <h2>Settings</h2>
        <InputGroup className='mb-3'>
            <InputGroup.Text>Display Brightness</InputGroup.Text>
            <Form.Control type='number' min={0} max={255} aria-label="display brightness" value={settings?.brightness} onChange={handleBrightnessChange} />
        </InputGroup>

        <InputGroup className='mb-3'>
            <InputGroup.Text>Screen On Distance</InputGroup.Text>
            <Form.Control type='number' min={0} max={255} aria-label="screen on distance" value={settings?.screenOnDistance} onChange={handleScreenOnDistanceChange} />
            <InputGroup.Text>cm</InputGroup.Text>
        </InputGroup>

        <InputGroup className='mb-3'>
            <InputGroup.Text>Screen On Interval</InputGroup.Text>
            <Form.Control type='number' min={0} max={255} aria-label="screen on interval" value={settings?.screenOnInterval} onChange={handleScreenOnIntervalChange} />
            <InputGroup.Text>ms</InputGroup.Text>
        </InputGroup>

        <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Save Settings</Button>
            <Button variant="danger">Factory Reset</Button>
        </ButtonGroup>
    </section>
}

export default Settings
