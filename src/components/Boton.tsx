export default function Boton() {

    const saludito = () => {
        alert("Hola como estas?")
    }

    return (
        <div>
         <button onClick={saludito}>Saludito</button>
        </div>
    )
}