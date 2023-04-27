import React, {useState, useContext} from 'react'
import { LoginContext } from '../../context/LoginContext'
import { inputsFirstMapping, inputsSecondMapping } from '../../utils/typesInputs'
import { validar, ExpRegulares, validarContraseña } from '../../utils/validacion'
import Input from '../input/Input'
import Button from '../button/Button'
import '../../styles/form.css'
import '../../styles/button.css'
import './registroInputs.css'

export function RegistroInputs() {
  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(false)
  const {email, password, ConfirmPassword, ciudad, Apellido, Direccion } = useContext(LoginContext)
  const handleSig = (e)=>{
    e.preventDefault()
    if(validar(ExpRegulares.correo, email) && validarContraseña(ExpRegulares.contraseña, password, ConfirmPassword)){
      setFirst(false)
      setSecond(true)
    }else{
      alert("Rellene los campos")
    }
  }
  const handleReg = (e)=>{
    e.preventDefault()
    if(validar(ExpRegulares.nombre, ciudad) && validar(ExpRegulares.nombre, Apellido)){
      //llamado a la api
    }else{
      alert("La ciudad, el nombre y apellido son obligatorios")
    }
  }
  return (
    <div className='App__form__sections'>
      <section className='App__Form__firstSection'>
        {
          first && inputsFirstMapping.map((infoInputs, index)=>{
            return <Input key={index} title={infoInputs.title} placeholderText={infoInputs.placeholderItem} typeInput={infoInputs.typeInput} classStyle={infoInputs.classStyles} />
          })
        }
        {
          !second && <Button classNameButton="app__form__button button--Next" handleButton={handleSig} >Siguiente</Button>
        }
      </section>
      <section className='App__Form__secondSection'>
        {
        !first && inputsSecondMapping.map((infoInputs, index)=>{
            return <Input key={index} title={infoInputs.title} placeholderText={infoInputs.placeholderItem} typeInput={infoInputs.typeInput} classStyle={infoInputs.classStyles} />
          })
        }
        {
          second && <Button classNameButton="app__form__button">Registrarme</Button>
        }
      </section>
    </div>
  )
}
