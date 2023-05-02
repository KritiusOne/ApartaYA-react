import React, {useContext} from 'react'
import { LoginContext } from '../../context/LoginContext'
import OnlyTextOption from '../../components/tableOptions/onlyTextOption/OnlyTextOption'
import Button from '../../components/button/Button'
import { Header } from '../../components/header/Header'
import { OptionList } from '../../components/tableOptions/optionList/OptionList'
import { useNavigate } from 'react-router-dom'
import { TableOptions } from '../../components/tableOptions/TableOptions'
import { AiOutlineComment } from 'react-icons/ai'
import {BsCardChecklist} from 'react-icons/bs'
import {BsFillPencilFill} from 'react-icons/bs'
import './perfil.css'

export default function Perfil() {
  const navegate = useNavigate()
  const {setIsLogin, setEmail, setPassword, setName,  setCiudad, setApellido, setDireccion, } = useContext(LoginContext);
  const {name, Apellido,  email, ciudad, Direccion} = useContext(LoginContext)
  const handleLogOutButton = (e)=>{
    e.preventDefault()
    setEmail("")
    setPassword("")
    setName("")
    setApellido("")
    setCiudad("")
    setDireccion("")
    setIsLogin(false)
    navegate("/")
  }
  const arr = [
    {
      nombre: "Mario Espinoza",
      msg: "Amigo, podriamos llegar a un acuerdo.",
      foto: "https://ejemplo.com/propiedad1.jpg"
    }, {
      nombre: "Daniela Salcedo",
      msg: "¡Hola!",
      foto: "https://ejemplo.com/propiedad1.jpg"
    }, {
      nombre: "Valentina Posso",
      msg: "Buenos dias Sr Jair, Me podría solucionar una inquietud?",
      foto: "https://ejemplo.com/propiedad1.jpg"
    }, {
      nombre: "Jaime Gonzales",
      msg: "Amigo, podriamos llegar a un acuerdo.",
      foto: "https://ejemplo.com/propiedad1.jpg"
    },
  ]
  const arrDataDashboard = [
    name, Apellido, email, ciudad, Direccion
  ]
  console.log(arrDataDashboard)
  return (
    <div className='perfil'>
      <Header />
      <div className='perfilContainer'>
        <TableOptions title={"Ultimos mensajes"} Icon={AiOutlineComment}> 
          {
            arr.map((mensaje, index)=><OptionList key={index} title={mensaje.nombre} data={mensaje.msg} img={mensaje.foto} Icon={AiOutlineComment} />)
          }
          <Button classNameButton={"perfil__mensajes__button"}  >ver mensajes</Button>
        </TableOptions>
        <TableOptions title={"Datos de la cuenta"} Icon={ BsCardChecklist } >
         {
          arrDataDashboard.map((data)=> <OnlyTextOption title={data} Icon={BsFillPencilFill}/>)
         }
        </TableOptions>
        <Button classNameButton={"perfil__button--logOut"} handleButton={handleLogOutButton} > Log out </Button>
      </div>
    </div>
  )
}
