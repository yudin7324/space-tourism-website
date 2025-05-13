import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.jsx'
import '@/styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='main'>
      <App />
    </div>
  </StrictMode>,
)
