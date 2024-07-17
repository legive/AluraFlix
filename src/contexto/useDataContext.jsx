import { useContext } from "react";
import { DataContext } from "./dataContext";

// Hook personalizado para usar el contexto

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const agregarVideo = (nuevoVideo) => {
    const dataRepetido = data.some((item) => item.id === nuevoVideo.id);
    let nuevaLista = [...data];

    if (!dataRepetido) {
      nuevaLista.push(nuevoVideo);
    } else {
      nuevaLista = data.filter((item) => item.id !== nuevoVideo.id);
    }

    setData(nuevaLista);
    console.log("Nuevos datos", data);
  };

  const actualizarData = (nuevosDatos) => {
    // Verificar si el objeto con el mismo id ya existe en la lista
    const existeEnLista = data.some((item) => item.id === nuevosDatos.id);

    // Crear una nueva lista basada en la lista actual
    let nuevaLista = [...data];

    if (!existeEnLista) {
      // Si el objeto no existe en la lista, agregarlo
      nuevaLista.push(nuevosDatos);
    } else {
      // Si el objeto ya existe en la lista, actualizarlo
      nuevaLista = nuevaLista.map((item) =>
        item.id === nuevosDatos.id ? nuevosDatos : item
      );
    }

    // Actualizar el estado con la nueva lista de datos
    setData(nuevaLista);

    // Mostrar en la consola los nuevos datos (opcional)
    console.log("Nuevos datos:", nuevaLista);
  };

  const eliminarData = (id) => {
    // Filtrar la lista para eliminar el objeto con el id proporcionado
    const nuevaLista = data.filter((item) => item.id !== id);

    // Actualizar el estado con la nueva lista sin el objeto eliminado
    setData(nuevaLista);

    // Mostrar en la consola los nuevos datos (opcional)
    console.log("Objeto eliminado con id:", id);
  };

  return { data, agregarVideo, actualizarData, eliminarData };
};
