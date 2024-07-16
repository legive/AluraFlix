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
  };

  return { data, agregarVideo };
};

