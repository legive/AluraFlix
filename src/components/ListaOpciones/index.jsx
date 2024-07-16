/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./ListaOpciones.css";
import { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid";
const ListaOpciones = (props) => {
  //Metodo map -> arreglo.map( (equipo, index) => {
  //    return <option></option>
  // })
 const [category, setCategory] = useState([]);

 useEffect(() => {
   // Realizar la solicitud GET aquí (ejemplo con fetch)
   fetch("http://localhost:3000/categoryData") // Modifica la URL según tu configuración
     .then((response) => response.json())
     .then((data) => setCategory(data))
     .catch((error) => console.error("Error fetching data:", error));
 }, []);
    
  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizaCategoria(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.categoria} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {category.map((categoria, index) => (
          <option key={index} value={categoria.name}>
            {categoria.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
