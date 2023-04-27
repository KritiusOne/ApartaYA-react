import React, {useState} from 'react'
import { LoginContext } from './LoginContext'

export default function LoginContextProvidex({children}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Direccion, setDireccion] = useState("")
  return (
    <LoginContext.Provider value={{
      email, setEmail,
      password, setPassword,
      ConfirmPassword, setConfirmPassword,
      Apellido, setApellido,
      ciudad, setCiudad,
      Direccion, setDireccion
    }}>
      {children}
    </LoginContext.Provider>
  )
}
