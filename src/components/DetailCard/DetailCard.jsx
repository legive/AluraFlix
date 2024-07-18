/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDataContext } from "../../contexto/useDataContext";
import Boton from "../Boton/Boton";
import PropTypes from "prop-types";
import "./DetailCard.css";
import { useParams } from "react-router-dom"; // Importa useParams desde react-router-dom



const DetailCard = () => {
  const { id } = useParams(); // Obtiene el parámetro 'id' de la URL
  const { data, category } = useDataContext();
  console.log("Datos en Contexto", data);

  // Usamos find para obtener el primer elemento que coincide con el id
  console.log(id);
  const registro = data.find((reg) => reg.id === parseInt(id));

    const cat = category.find((c) => c.name ===registro.category);

  console.log("categoria", cat);
  return (
    <div className="detalle-video">
      <div className="">
        <form className="form">
          <h1 style={{color:`${cat.primaryColor}`}}>{registro.category}</h1>
          <h2>{registro.title}</h2>
          <iframe
            className="player"
            width="560"
            height="315"
            src={registro.link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
          ></iframe>
          <label className="">{registro.description}</label>
        </form>
      </div>
    </div>
  );
};


export default DetailCard;
