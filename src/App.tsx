import { useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faBarcode, faClock, faWifi, faHourglass } from "@fortawesome/free-solid-svg-icons";

import { loadInfo } from './services/DataService';

function App() {
  useEffect(() => {
    const interval = setInterval(async () => {
      const info = await loadInfo()
      console.log('Logs every minute', info);
    }, 30 * 1000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  return (
    <Container className="p-3">
      <h1 className='header'>BedRoom Clock ⏰</h1>

      <h2>Device Info</h2>
      <ListGroup>
        <ListGroup.Item><FontAwesomeIcon icon={faCodeBranch} /></ListGroup.Item>
        <ListGroup.Item><FontAwesomeIcon icon={faBarcode} /></ListGroup.Item>
        <ListGroup.Item><FontAwesomeIcon icon={faClock} /></ListGroup.Item>
        <ListGroup.Item><FontAwesomeIcon icon={faWifi} /></ListGroup.Item>
        <ListGroup.Item><FontAwesomeIcon icon={faHourglass} /></ListGroup.Item>
      </ListGroup>
    </Container>
  )
}

export default App
