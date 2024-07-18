/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDataContext } from "../../contexto/useDataContext"
import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const Formulario = () => {

  const { data, agregarVideo } = useDataContext()
 

  
  
  const [titulo, actualizarTitulo] = useState("");
  const [categoria, actualizaCategoria] = useState("FRONT END");
  const [imagen, actualizarImagen] = useState("");
  const [video, actualizarVideo] = useState("");
  const [descripcion, actualizardescripcion] = useState("");
  
   const registrarVideo = (nuevoVideo) => {
     
     //Spread operator
     agregarVideo(nuevoVideo);
   };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio");
    let datosAEnviar = {
      id: uuid(),
      title: titulo,
      category:categoria,
      photo:imagen,
      link:video,
      description:descripcion,
    };
    registrarVideo(datosAEnviar);
     history.push("/");
  };
   const manejarCambioDescripcion = (e) => {
     actualizardescripcion(e.target.value);
   };

  return (
    <section onSubmit={manejarEnvio} className="sec-form" >
      <form className="formulario">
        <h1>NUEVO VIDEO</h1>
        <h2>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>

        <hr></hr>
        <h3>Crear Tarjeta</h3>
        <hr></hr>
        <div className="group1">
          <Campo
            titulo="Titulo"
            placeholder="Ingrese el titulo"
            ancho="470px"
            valor={titulo}
            actualizarValor={actualizarTitulo}
          ></Campo>
          <div className="selec">
            <label>Categoría</label>
            <ListaOpciones 
              valor={categoria}
              actualizaCategoria={actualizaCategoria}
            ></ListaOpciones>
          </div>
        </div>
        <div className="group2">
          <Campo
            titulo="Imagen"
            placeholder="El enlace es obligatorio"
            ancho="573px"
            valor={imagen}
            actualizarValor={actualizarImagen}
          ></Campo>
          <Campo
            titulo="Video"
            placeholder="Ingrese el enlace del video"
            ancho="573px"
            valor={video}
            actualizarValor={actualizarVideo}
          ></Campo>
        </div>

        <label>Descripcion</label>
        <textarea
          value={descripcion}
          onChange={manejarCambioDescripcion}
          placeholder="¿de qué trata este vídeo?"
        ></textarea>

        <div className="botonesform">
         
            <button className="boton" type="submit">
              GUARDAR
            </button>
      
          <button className="boton" type="submit">
            LIMPIAR
          </button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
