import React, {useState} from 'react'
import { PropsContext } from './PropsContext'
export default function PropsContextProvider({children}) {
  const [props, setProps] = useState({})
  return (
    <PropsContext.Provider
      value={{
          props,
          setProps
        }}
    >
      {children}
    </PropsContext.Provider>
  )
}
