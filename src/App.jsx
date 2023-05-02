import logo from '../src/assets/logo-transparent.png'
import Input from './components/input/Input'
import Button from './components/button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from './context/LoginContext'
import { users } from './utils/dataFake'
import './App.css'
import './styles/form.css'
import './styles/button.css'

function App() {
  const {email, password,setId, setIsLogin, setEmail, setPassword, setName,  setCiudad, setApellido, setDireccion, } = useContext(LoginContext);
  const navegate = useNavigate()
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
    //llamado a la api que no está

    const [user] = users.filter((user)=> user.username == email ? user : null)
    if(user.password == password){
      console.log("LOGUED")
      setEmail(user.username)
      setPassword(user.password)
      setName(user.nombre)
      setApellido(user.apellido)
      setCiudad(user.ciudad)
      setDireccion(user.direccion)
      setIsLogin(true)
      setId(user.id)
      navegate("/inicio")
    }else {
      alert("error")
    }
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
        <Button classNameButton="app__form__button" handleButton={onClickHandler}>Iniciar sesion</Button>
      </form>
      <Link to={"/singIn"} className='app__link--Register' > ¿No tienes una cuenta?¡Registrate Aquí! </Link>
    </div>
  </div>
  )
}

export default App
