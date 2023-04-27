import logo from '../src/assets/logo-transparent.png'
import Input from './components/input/Input'
import { Link } from 'react-router-dom'
import { Registrarse } from './pages/registrarse/Registrarse'
import './App.css'
import './styles/form.css'
import './styles/button.css'
import { useContext } from 'react'
import { PropsContext } from './context/PropsContext'

function App() {
  const emailObject = {
    titleClass:"app__form__sectionText__title",
    containerClass: "app__form__sectionText",
    inputClass: "app__form__sectionText__EmailInput", 
  }
  const passwordObject = {
    titleClass:"app__form__sectionPassword__title",
    containerClass: "app__form__sectionPassword",
    inputClass: "app__form__sectionPassword__passwordInput", 
  }
  const onClickHandler = (e)=>{
    e.preventDefault()
    const {email, password} = useContext(PropsContext);
    //llamada a la api
  }
  return (
    <div className="app">
    <div className="sectionLogin app__container--Img">
      <img src={logo} alt="logo casas" />
    </div>
    <div className="sectionLogin app__container--form">
      <div className="app__container--title">
        <h1 className="app__title">INICIAR SESION</h1>
        <span className="app__subtitle">Si ya es miembro, puede iniciar sesión con su dirección de correo electrónico y
          contraseña.</span>
      </div>
      <form action="" className="app__form">
        <Input title={"Correo"} placeholderText={"CORREO ELECTRONICO"} typeInput={"text"} classStyle={emailObject} />
        <Input title={"Contraseña"} placeholderText={"CONTRASEÑA"} typeInput={"password"} classStyle={passwordObject} />
        <div className="app__form__sectionCheckbox">
          <input type="checkbox" />
          <span className="app__form__sectionCheckbox__title">Recordar datos</span>
        </div>
        <button className="app__form__button" id="button--login" onClick={onClickHandler}>Iniciar sesion</button>
      </form>
      <Link to={"/singIn"} className='app__link--Register' > ¿No tienes una cuenta?¡Registrate Aquí! </Link>
    </div>
  </div>
  )
}

export default App
