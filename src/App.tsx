import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
