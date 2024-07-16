/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import borrar from "./img/borrar.png";
import editar from "./img/editar.png";
import "./Card.css"; // Asegúrate de importar correctamente los estilos CSS

const Card = ({ color, photo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div
        className="photo"
        style={{
          "--primary-color": color,
          backgroundImage: `url(${photo})`,
          backgroundRepeat: "no-repeat", backgroundPosition:"center", backgroundSize:"cover"
        }}
      ></div>

      
      <div className="iconos" style={{ "--primary-color": color }}>
        <img src={borrar} alt="Borrar" />
        <img onClick={openModal} src={editar} alt="Editar" />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Card;
