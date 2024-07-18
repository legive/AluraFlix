/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDataContext } from "../../contexto/useDataContext";
import Boton from "../Boton/Boton";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  photo,
  category,
  title,
  link,
  description,
  id,
}) => {
  if (!isOpen) return null;
  const { actualizarData } = useDataContext();

  const [titulo, actualizarTitulo] = useState(title);
  const [categoria, actualizaCategoria] = useState(category);
  const [imagen, actualizarImagen] = useState(photo);
  const [video, actualizarVideo] = useState(link);
  const [descripcion, actualizardescripcion] = useState(description);

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      id: id,
      title: titulo,
      category: categoria,
      photo: imagen,
      link: video,
      description: descripcion,
    };
    actualizarData(datosAEnviar);
    // history.push("/"); // Descomentar si utilizas React Router
  };

  const manejarCambioCategoria = (e) => {
    actualizaCategoria(e.target.value);
  };



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>

        <form className="form" onSubmit={manejarEnvio}>
          <p className="titulo">EDITAR CARD</p>
          <label className="">Título</label>
          <input
            value={titulo}
            placeholder="¿qué es javascript?"
            type="text"
            onChange={(event) => {
              actualizarTitulo(event.target.value);
            }}
          ></input>
          <label>Categoría</label>

          <select value={categoria} onChange={manejarCambioCategoria}>
            <option>FRONT END</option>
            <option>BACK END</option>
            <option>INNOVACIÓN Y GESTIÓN</option>
          </select>

          <label className="">Imagen</label>
          <input
            value={imagen}
            placeholder="http://"
            type="text"
            onChange={(event) => {
              actualizarImagen(event.target.value);
            }}
          ></input>

          <label className="">Video</label>
          <input
            value={video}
            placeholder="http://"
            type="text"
            onChange={(event) => {
              actualizarVideo(event.target.value);
            }}
          ></input>

          <label className="">Descripción</label>
          <textarea
            value={descripcion}
            placeholder="tyytyty 56ty"
            type="textarea"
            onChange={(event) => {
              actualizardescripcion(event.target.value);
            }}
          ></textarea>
          <div className="botones">
            <Boton onClick={manejarEnvio} texto="Guardar" />
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
