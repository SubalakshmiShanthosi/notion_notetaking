import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <Auth0Provider
      domain='dev-q52sxp34kikys5pr.us.auth0.com'
      clientId='H0QH6QGUqb3CGawGbmHFfh1prAvDFNbg'
      authorizationParams={{
        redirect_uri: window.location.origin, 
        audience:"http://localhost:8090",
        scope: "read:current_user",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
