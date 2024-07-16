
import Header from "./components/Header/Header";
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
 import NewVideo from "./pages/NewVideo"
// import Banner from "./components/Banner/Banner"
// import Cards from "./components/Cards/Cards"
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { DataProvider } from "./contexto/dataContext"; // Ruta correcta al archivo dataContext.jsx


function App() {
 

  return (
    <Router>
      <Header></Header>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewVideo />} />
          {/* <Route path="*" element={<NewVideo />} /> */}
        </Routes>
      </DataProvider>
      <Footer />
    </Router>
  );
}

export default App
