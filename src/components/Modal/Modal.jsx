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
  id
}) => {
  if (!isOpen) return null;
  const {actualizarData } = useDataContext();
  
  const [titulo, actualizarTitulo] = useState(title);
  const [categoria, actualizaCategoria] = useState(category);
  const [imagen, actualizarImagen] = useState(photo);
  const [video, actualizarVideo] = useState(link);
  const [descripcion, actualizardescripcion] = useState(description);

console.log("Foto",imagen)
  
 

   const manejarEnvio = (e) => {
     e.preventDefault();
     console.log("Manejar el envio");
     let datosAEnviar = {
       id: id,
       title: titulo,
       category: categoria,
       photo: imagen,
       link: video,
       description: descripcion,
     };
     actualizarData(datosAEnviar);
      history.push("/");

   
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
          <h1>EDITAR CARD</h1>
          <label className="">Título</label>
          <input
            value={title}
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
            <Boton texto="Guardar" />
            <Boton onClick="Submit" texto="Limpiar" />
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
