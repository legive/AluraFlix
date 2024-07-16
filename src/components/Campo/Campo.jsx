/* eslint-disable react/prop-types */
import "./Campo.css"
const Campo = (props) => {
    const { titulo, placeholder, ancho, valor, actualizarValor } = props
     const manejarCambio = (e) => {
      actualizarValor(e.target.value);
     };
    return (
        <div className="campo">
            <label>{titulo}</label>
            <input onChange={manejarCambio} value={valor} placeholder={placeholder} type="text" style={{ width: ancho }}
            ></input>

        </div>

    )
}
export default Campo