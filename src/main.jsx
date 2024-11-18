import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, ProviderApp } from './app'
import './index.css'
import "./core/utility/Bilingual/i18n.jsx"
import 'regenerator-runtime/runtime';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderApp>
      <App />
    </ProviderApp>
  </React.StrictMode>,
)
