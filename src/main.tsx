import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PortafolioWeb } from './PortafolioWeb'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortafolioWeb />
  </StrictMode>,
)
