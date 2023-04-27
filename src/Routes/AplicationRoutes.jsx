import React from 'react'
import Inicio from '../pages/inicio/Inicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inicio' Component={Inicio}/>
      </Routes>
    </BrowserRouter>
  )
}
