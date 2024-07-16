/* eslint-disable react/prop-types */
import Boton from "../Boton/Boton";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        <form className="form">
          <h1>EDITAR CARD</h1>
          <label className="">Título</label>
          <input placeholder="¿qué es javascript?" type="text"></input>
          <label>Categoría</label>
          <select>
            <option>Seleccione una opcion</option>
          </select>

          <label className="">Imagen</label>
          <input placeholder="http://" type="text"></input>

          <label className="">Video</label>
          <input placeholder="http://" type="text"></input>

          <label className="">Descripción</label>
          <textarea placeholder="tyytyty 56ty" type="textarea"></textarea>
          <div className="botones">
            <Boton texto="Guardar" />
            <Boton texto="Limpiar" />
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
