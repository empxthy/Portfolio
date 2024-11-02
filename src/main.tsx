import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <App />
  </StrictMode>,
)
