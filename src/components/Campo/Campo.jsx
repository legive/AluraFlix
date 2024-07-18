/* eslint-disable react/prop-types */
import "./Campo.css"
const Campo = (props) => {
    const { titulo, placeholder, valor, actualizarValor } = props
     const manejarCambio = (e) => {
      actualizarValor(e.target.value);
     };
    return (
        <div className="campo">
            <label>{titulo}</label>
            <input className="textbox" onChange={manejarCambio} value={valor} placeholder={placeholder} type="text" 
            ></input>

        </div>

    )
}
export default Campo