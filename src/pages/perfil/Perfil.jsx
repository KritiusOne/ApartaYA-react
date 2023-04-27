import React from 'react'
import { Header } from '../../components/header/Header'
import { TableOptions } from '../../components/tableOptions/TableOptions'
import { AiOutlineComment } from 'react-icons/ai'
import './perfil.css'
import { OptionList } from '../../components/tableOptions/optionList/OptionList'
import Button from '../../components/button/Button'

export default function Perfil() {
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
  return (
    <div className='perfil'>
      <Header />
      <div className='perfilContainer'>
        <TableOptions title={"Mensajes"} Icon={AiOutlineComment}> 
          {
            arr.map((mensaje, index)=><OptionList key={index} title={mensaje.nombre} data={mensaje.msg} img={mensaje.foto} Icon={AiOutlineComment} />)
          }
        </TableOptions>
        <Button classNameButton={"perfil__button--logOut"} > Log out </Button>
      </div>
    </div>
  )
}
