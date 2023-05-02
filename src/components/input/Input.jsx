import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { inputsTypes } from '../../utils/typesInputs'
import '../../styles/form.css'

export default function Input({title, typeInput, placeholderText, classStyle}) {
  const {setEmail, setPassword, setConfirmPassword, setCiudad, setName, setApellido, setDireccion } = useContext(LoginContext)
  const handleInput = (e) =>{
    if(inputsTypes.includes(title)){
      if(title.toUpperCase() == "CORREO") setEmail(e.target.value)
      else if(title.toUpperCase() == "CONTRASEÑA") setPassword(e.target.value)
      else if(title.toUpperCase() == "CONFIRMAR CONTRASEÑA") setConfirmPassword(e.target.value)
      else if(title.toUpperCase() == "CIUDAD") setCiudad(e.target.value)
      else if(title.toUpperCase() == "NOMBRE") setName(e.target.value)
      else if(title.toUpperCase() == "APELLIDO") setApellido(e.target.value)
      else if(title.toUpperCase() == "DIRECCION") setDireccion(e.target.value)

    }
  }
  return (
    <div className={classStyle.containerClass} >
      <span className={classStyle.titleClass} >
        {title}
      </span>
      <input type={typeInput} placeholder={placeholderText} className={classStyle.inputClass} onChange={handleInput} />
    </div>
  )
}
