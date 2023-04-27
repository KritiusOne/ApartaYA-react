import React from 'react'
import logo from '../../assets/logo-transparent.png'
import '../../App.css'
import '../../styles/form.css'
import '../../styles/button.css'
import './registro.css'
import { Link } from 'react-router-dom'
import { RegistroInputs } from '../../components/registroInputs/RegistroInputs'

export function Registrarse() {
  return (
    <div className="app">
    <div className="sectionLogin app__container--form">
      <div className="app__buttonBack--container">
        <Link to={'/'} className="app__link--back">ATRAS</Link>
      </div>
      <div className="app__container--title">
        <h1 className="app__title">Registrate</h1>
        <span className="app__subtitle">Si ya es miembro, puede iniciar sesión con su dirección de correo electrónico y contraseña.</span>
      </div>
      <form action="" className="app__form">
        {
          <RegistroInputs />
        }
        
      </form>
    </div>
    <div className="sectionLogin app__container--Img">
      <img src={logo} alt="logo casas"/>
    </div>
  </div>
  )
}
