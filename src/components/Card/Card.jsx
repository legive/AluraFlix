/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDataContext } from "../../contexto/useDataContext"
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import borrar from "./img/borrar.png";
import editar from "./img/editar.png";
import "./Card.css"; // Asegúrate de importar correctamente los estilos CSS

const Card = ({ color, photo, category, title, link, description,id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const { eliminarData } = useDataContext();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
   const handleEliminar = () => {
     eliminarData(id); // Llama a la función eliminarData con el id del video
   };

  return (
    <div className="card">
      <div
        className="photo"
        style={{
          "--primary-color": color,
          backgroundImage: `url(${photo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="iconos" style={{ "--primary-color": color }}>
        <img src={borrar} alt="Borrar" onClick={handleEliminar} />
        <img onClick={openModal} src={editar} alt="Editar" />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          photo={photo}
          category={category}
          title={title}
          link={link}
          description={description}
          id={id}
        />
      </div>
    </div>
  );
};

export default Card;
