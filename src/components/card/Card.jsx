import React from 'react'
import Button from '../button/Button'
import './card.css'

export function Card({title, img, precio, direccion}) {
  return (
    <div className='card'>
      <div className='card__header'>
        <span className='card__header__title'>
          {title}
        </span>
      </div>
      <img src={img} alt="imagen de la card" className='card__img' />
      <div className='card__body'>
        <span className='card__body__precio'> Precio: { precio } </span>
        <span className='card__body__direccion' > Direccion: {direccion} </span>
      </div>
      <Button classNameButton={"card__button"}> Ver mas </Button>
    </div>
  )
}
