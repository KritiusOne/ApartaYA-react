import React from 'react'
import logo from '../../assets/logo-transparent.png'
import {BsFillHouseFill} from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import Button from '../button/Button'
import './header.css'
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <header className='header'>
      <div className='header__container--icon'>
        <img src={logo} alt="Logo apartaYA" className='header__icon'/>
        <span className='header__title'>¡APARTAYA!</span>
      </div>
      <nav className='header__nav'>
        <ul className='header__nav__list'>
          <li className='header__nav__list__element element--inicio'>
            <Link to={"/inicio"} className={"header__nav__list__element__button"}>
              <BsFillHouseFill className='icon--inicio'/>
              <span className='list--element__title title--inicio'>Inicio</span>
            </Link>
          </li>
          <li className='header__nav__list__element element--mensajes'>
            <Link to={"/perfil"} classNameButton={"header__nav__list__element__button"}>
              <AiOutlineComment className='icon--msg' />
              <span className='list--element__title title--msg'>Mensajes</span>
            </Link>
          </li>
          <li className='header__nav__list__element element--notificaciones'>
            <Button classNameButton={"header__nav__list__element__button"}>
              <IoMdNotificationsOutline className='icon--notificaciones'/>
              <span className='list--element__title title--notificaciones'>Notificaciones</span>
            </Button>
          </li>
          <li className='header__nav__list__element element--avatar'>
            <Link to={"/perfil"}>
            <img src="https://elcomercio.pe/resizer/AB93Kg1JoITGLMLkCgLBnVzg_7g=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/37OWRM2CLBAE7BP5SXKLVMNHZE.jpg" alt="" className='element--avatar__img' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
