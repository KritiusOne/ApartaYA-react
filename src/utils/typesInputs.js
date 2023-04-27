export const inputsTypes = ["Correo", "Contraseña","Confirmar Contraseña", "Nombre", "Apellido", "Ciudad", "Direccion"]
export const inputsFirstMapping = [
  {
    title: "Correo",
    typeInput: "text",
    placeholderItem: "CORREO",
    classStyles : {
      titleClass:"app__form__sectionText__title",
      containerClass: "app__form__sectionText",
      inputClass: "app__form__sectionText__EmailInput", 
    }
  }, {
    title: "Contraseña",
    typeInput: "password",
    placeholderItem: "CONTRASEÑA",
    classStyles : {
      containerClass: "app__form__sectionPassword",
      titleClass:"app__form__sectionPassword__title",
      inputClass: "app__form__sectionPassword__passwordInput", 
    }
  },{
    title: "Confirmar Contraseña",
    typeInput: "password",
    placeholderItem: "CONFIRMAR CONTRASEÑA",
    classStyles : {
      containerClass: "app__form__sectionPassword",
      titleClass:"app__form__sectionPassword__title",
      inputClass: "app__form__sectionPassword__passwordInput", 
    }
  },
]
export const inputsSecondMapping = [
  {
    title: "Nombre",
    typeInput: "text",
    placeholderItem: "NOMBRE",
    classStyles : {
      titleClass:"app__form__sectionText__title",
      containerClass: "app__form__sectionText",
      inputClass: "app__form__sectionText__NombreInput", 
    }
  },{
    title: "Apellido",
    typeInput: "text",
    placeholderItem: "APELLIDO",
    classStyles : {
      titleClass:"app__form__sectionText__title",
      containerClass: "app__form__sectionText",
      inputClass: "app__form__sectionText__ApellidoInput", 
    }
  },{
    title: "Ciudad",
    typeInput: "text",
    placeholderItem: "CIUDAD",
    classStyles : {
      titleClass:"app__form__sectionText__title",
      containerClass: "app__form__sectionText",
      inputClass: "app__form__sectionText__CiudadInput", 
    }
  },{
    title: "Direccion",
    typeInput: "text",
    placeholderItem: "DIRECCION",
    classStyles : {
      titleClass:"app__form__sectionText__title",
      containerClass: "app__form__sectionText",
      inputClass: "app__form__sectionText__DireccionInput", 
    }
  },
]