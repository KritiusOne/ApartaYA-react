import React, {useState} from 'react'
import { LoginContext } from './LoginContext'

export default function LoginContextProvider({children}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("")
  const [ciudad, setCiudad] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Direccion, setDireccion] = useState("")
  const [isLogin, setIsLogin] = useState(false)
  const [id, setId] = useState(-1)
  return (
    <LoginContext.Provider value={{
      email, setEmail,
      password, setPassword,
      ConfirmPassword, setConfirmPassword,
      name, setName,
      Apellido, setApellido,
      ciudad, setCiudad,
      Direccion, setDireccion,
      isLogin, setIsLogin,
      id, setId
    }}>
      {children}
    </LoginContext.Provider>
  )
}
