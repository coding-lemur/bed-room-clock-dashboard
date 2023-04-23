import { FC, useState, useCallback, useEffect, ChangeEvent } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

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

    const handleBrightnessChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        console.log('🦘', e.target.value)

        setSettings(oldState => ({
            brightness: Number.parseInt(e.target.value),
            screenOnDistance: oldState?.screenOnDistance ?? 0,
            screenOnInterval: oldState?.screenOnInterval ?? 0,
        }))
    }, [])

    return <section id='settings' className='mb-3'>
        <h2>Settings</h2>
        <InputGroup className='mb-3'>
            <InputGroup.Text>Brightness</InputGroup.Text>
            <Form.Control type='number' min={0} max={255} aria-label="brightness" value={settings?.brightness} onChange={handleBrightnessChange} />
        </InputGroup>

        <Button variant="primary">Save Settings</Button>{' '}
        <Button variant="danger">Factory Reset</Button>{' '}
    </section>
}

export default Settings
