import React, {useContext} from 'react'
import App from '../App'
import Inicio from '../pages/inicio/Inicio'
import Perfil from '../pages/perfil/Perfil'
import { LoginContext } from '../context/LoginContext'
import {Registrarse}  from '../pages/registrarse/Registrarse.jsx'
import { Route, Routes, } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoutes'

export default function LoginRoutes() {
  const {isLogin} = useContext(LoginContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App} exact />
        <Route path='/singIn' Component={Registrarse}/>
        <Route element={<ProtectedRoute isAllowed={isLogin} />} >
          <Route path='/inicio' Component={Inicio} />
          <Route path='/dashboard/:userID' Component={Perfil} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
