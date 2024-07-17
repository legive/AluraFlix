/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { DataContext } from "../../contexto/dataContext";
import Card from "../Card/Card";
import TitleCard from "../TittleCard/TittleCard";
import "./Cards.css";

const Cards = () => {
  // Utiliza el contexto para obtener los datos
  const { data } = useContext(DataContext);

  console.log("Datos", { data });

  // Filtrar datos por categorías
  const frontendData = data.filter((item) => item.category === "FRONT END");
  const backendData = data.filter((item) => item.category === "BACK END");
  const innovacionData = data.filter(
    (item) => item.category === "INNOVACIÓN Y GESTIÓN"
  );

  return (
    <div className="cards-order">
      <div className="category-section">
        <TitleCard title="FRONTEND" color="rgba(107, 209, 255, 1)" />
        <div className="cards-container">
          {frontendData.map((item) => (
            <Card
              key={item.id}
              photo={item.photo}
              color="rgba(107, 209, 255, 1)"
              category={item.category}
              title={item.title}
              link={item.link}
              description={item.description}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <div className="category-section">
        <TitleCard title="BACKEND" color="rgba(0, 200, 111, 1)" />
        <div className="cards-container">
          {backendData.map((item) => (
            <Card
              key={item.id}
              photo={item.photo}
              color="rgba(0, 200, 111, 1)"
              category={item.category}
              title={item.title}
              link={item.link}
              description={item.description}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <div className="category-section">
        <TitleCard title="INNOVACIÓN Y GESTIÓN" color="rgba(255, 186, 5, 1)" />
        <div className="cards-container">
          {innovacionData.map((item) => (
            <Card
              key={item.id}
              photo={item.photo}
              color="rgba(255, 186, 5, 1)"
              category={item.category}
              title={item.title}
              link={item.link}
              description={item.description}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
