import "./styles.css"
import Titulo from "./components/Titulo"
import Boton from "./components/Boton"
import { useState } from "react"

export default function Saludo () {

  const [nombre, setNombre] = useState("Pepe")
  const [apellido, setApellido] = useState("apellido secreto")
  const [ayudita, setAyudita] = useState(false)

  return(
    <div>
    <Titulo/>
    <h1>Mi nombre es {nombre} {ayudita ? <>{apellido}</> : null}</h1>
    <button onClick={() => setAyudita(true)}>Mostrar apellido secreto</button>
    <button onClick={() => setAyudita(false)}>Dejar de mostrar apellido super secreto</button>
    <Boton/>
    </div>
  )
}