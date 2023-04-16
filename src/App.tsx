import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { loadInfo } from './services/DataService';

function App() {
  //const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(async () => {
      const info = await loadInfo()
      console.log('Logs every minute', info);
    }, 30 * 1000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  return (
    <Container className="p-3">
      <h1 className='header'>BedRoom Clock Dashboard</h1>

      <h2>Device Info</h2>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
    </Container>
  )
}

export default App
