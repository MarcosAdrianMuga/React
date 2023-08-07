import "./styles.css"
import Titulo from "./components/Titulo"
import Boton from "./components/Boton"
import { useState } from "react"

export default function Saludo () {

  const [nombre, setNombre] = useState("Pepe")
  const [apellido, setApellido] = useState("apellido secreto")
  const [ayudita, setAyudita] = useState(false)



  const [usuario, setUsuario] = useState({
    mail: "",
    constra: ""
  })
  const handleRegistroTrucho = () => {
    console.log(usuario)
    setUsuario({mail:"", constra: ""})
  }

  const handleCambio = (e : any) => {
    if(e.target.name === "mail") {
      setUsuario({...usuario, mail: e.target.value})
    } else {
      setUsuario({...usuario, constra: e.target.value})
    }
    
  }

  return(
    <div>
    <Titulo/>
    <h1>Mi nombre es {nombre} {ayudita ? <>{apellido}</> : null}</h1>
    <button onClick={() => {setAyudita(true)}}>Mostrar apellido secreto</button>
    <button onClick={() => setAyudita(false)}>Dejar de mostrar apellido super secreto</button>

    <h1>Formulario! :O</h1>
    <p>Mail:</p><input name="mail" value={usuario.mail} onChange={(e) => handleCambio(e)}></input>
    <p>Contraaaaa:</p><input value={usuario.constra} onChange={(e) => handleCambio(e)}></input>
    <button onClick={() => handleRegistroTrucho()}>Registro trucho</button>
    
    <Boton/>
    </div>
  )
}