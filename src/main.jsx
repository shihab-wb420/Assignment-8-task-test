import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ReadingProvider} from "./context/ReadingContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  <ReadingProvider>
    <App />
  </ReadingProvider>
  </React.StrictMode>,
)
