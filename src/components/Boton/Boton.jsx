/* eslint-disable react/prop-types */
import "./Boton.css"

const Boton = ({texto}) => {
    return (
        <div>
            <button className="boton">{texto}</button>
        </div>
        
    )
}

export default Boton