import React from 'react'
import './tableOptions.css'

export function TableOptions({title, children, Icon}) {
  return (
    <div className='tableOptions'>
      <section className='tableOptions__header'>
        <Icon className='tableOptions__icon' />
        <h3 className='tableOptions__title'>
          {title}
        </h3>
      </section>
      <section className='tableOptions__body' >
        {children}
      </section>
    </div>
  )
}
