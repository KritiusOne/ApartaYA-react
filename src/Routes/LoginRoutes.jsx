import React from 'react'
import App from '../App'
import Inicio from '../pages/inicio/Inicio'
import Perfil from '../pages/perfil/Perfil'
import {Registrarse}  from '../pages/registrarse/Registrarse.jsx'
import { Route, Routes, } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

export default function LoginRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App} exact />
        <Route path='/singIn' Component={Registrarse}/>
        <Route path='/inicio' Component={Inicio}/>
        <Route path='/perfil' Component={Perfil}/>
      </Routes>
    </BrowserRouter>
  )
}
