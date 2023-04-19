import React from 'react'
import ReactDOM from 'react-dom/client'

import ForkMe from './components/ForkMe/ForkMe';
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ForkMe />
    <App />
  </React.StrictMode>,
)
