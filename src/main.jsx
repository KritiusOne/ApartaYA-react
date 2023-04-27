import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginContextProvider from './context/LoginContextProvider.jsx'
import PropsContextProvider from './context/PropsContextProvider.jsx'
import MyRoutes from './Routes/LoginRoutes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      <PropsContextProvider>
        <MyRoutes>
        </MyRoutes>
      </PropsContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
)
