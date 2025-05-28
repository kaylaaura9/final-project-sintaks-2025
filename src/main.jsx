import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import App from './App.jsx'
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
