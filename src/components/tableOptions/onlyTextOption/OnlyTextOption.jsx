import React from 'react'
import './onlyText.css'

export default function OnlyTextOption({Icon, title}) {
  return (
    <div className='onlyTextOption'>
      <Icon className='onlyTextOption__icon' />
      <span className='onlyTextOption__title'>
        {title}
      </span>
    </div>
  )
}
