import React from 'react'
import './optionList.css'

export function OptionList({title, img, data, Icon}) {
  return (
    <div className='optionList'>
      <img src={img} alt="imagen de la opcion" className='optionList__img'/>
      <div className='optionList__container'>
        <span className='optionList__title'>
          {title}
        </span>
        <span className='optionList__data'>
          {data}
        </span>
      </div>
      <Icon className='optionList__icon' />
    </div>
  )
}
