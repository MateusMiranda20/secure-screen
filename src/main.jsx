import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AccessProvider } from './context/AccessContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccessProvider>
      <App />
    </AccessProvider>
  </React.StrictMode>,
)
