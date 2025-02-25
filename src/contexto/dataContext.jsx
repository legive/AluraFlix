/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import cardsData from "../data/bd"

// Crear el contexto
export const DataContext = createContext();
DataContext.displayName = "Data";

// Proveedor de datos
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(cardsData);
  

//     useEffect(() => {
      
//     // Realizar la solicitud GET aquí (ejemplo con fetch)
//     // fetch("http://localhost:3000/cardsData") // Modifica la URL según tu configuración
//     //   .then((response) => response.json())
//     //   .then((data) => setData(data))
//       //   .catch((error) => console.error("Error fetching data:", error));
//       setData(cardsData)
//   }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
