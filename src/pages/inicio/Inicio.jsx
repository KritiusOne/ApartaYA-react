import React from 'react'
import { Header } from '../../components/header/Header'
import { TableOptions } from '../../components/tableOptions/TableOptions'
import { OptionList } from '../../components/tableOptions/optionList/OptionList'
import OnlyTextOption from '../../components/tableOptions/onlyTextOption/OnlyTextOption'
import { propiedadesFavoritas, publicaciones, notificacionesRecientes } from '../../utils/dataFake'
import {HiOutlinePhotograph} from 'react-icons/hi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiFillHeart} from 'react-icons/ai'
import {AiFillCheckSquare} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Card } from '../../components/card/Card'
import './inicio.css'

export default function Inicio() {
  const optionsPerfil = [
    'propiedad', 'agregar', 'editar', 'eliminar'
  ]
  return (
    <div className='Inicio'>
      <Header />
      <div className='Inicio__container--columns'>
        <aside className="section--Inicio__leftColumn">
          <TableOptions title={"Jair de la Rosa"} Icon={HiOutlinePhotograph}>
            {
              optionsPerfil.map((option, index)=><OnlyTextOption title={option} key={index} Icon={AiFillCheckSquare} />)
            }
          </TableOptions>
          <TableOptions title={"Propiedades Favoritas"} Icon={AiFillHeart}>
            {
              propiedadesFavoritas.map((propiedad, index)=><OptionList title={propiedad.title} data={propiedad.subtitle} img={propiedad.imagen} Icon={AiFillHeart} />)
            }
          </TableOptions>
        </aside>
        <section className="section--Inicio__centerColumn">
          {
            publicaciones.map((publicacion, index)=>{
              return <Card title={publicacion.Tipo} direccion={publicacion.Direccion} img={"https://www.mundodeportivo.com/alfabeta/hero/2022/05/one-piece-red-nave.jpg?width=1200&aspect_ratio=16:9"} precio={publicacion.precio} />
            })
          }
        </section>
        <section className="section--Inicio__rightColumn">
          <TableOptions title={"Notificaciones recientes"} Icon={IoMdNotificationsOutline}>
            {
              notificacionesRecientes.map((propiedad, index)=><OptionList title={propiedad.title} data={propiedad.subtitle} img={propiedad.imagen} Icon={AiFillCheckCircle} />)
            }
          </TableOptions>
        </section>
      </div>
    </div>
  )
}
