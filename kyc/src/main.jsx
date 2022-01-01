import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="170268353832-0fn4qbgklemeb9s0o5elvi99ronia9ov.apps.googleusercontent.com">
  <StrictMode>
    <App />
  </StrictMode> 
  </GoogleOAuthProvider> 
)
