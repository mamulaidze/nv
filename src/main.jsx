import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Content from './content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Content />
  </StrictMode>,
)
