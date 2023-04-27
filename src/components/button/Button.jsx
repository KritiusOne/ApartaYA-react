import React from 'react'

export default function Button({classNameButton, handleButton, children}) {
  return (
    <>
    <button className={`button ${classNameButton}`} onClick={handleButton} >
      {children}
    </button>
    </>
  )
}
