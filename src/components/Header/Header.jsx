import "./header.css";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import logo from "./img/LogoMain.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav className="botones">
        <Link to="/">
          <Boton texto="HOME" />
        </Link>

        <Link to="/new">
          <Boton texto="NUEVO VIDEO" />
        </Link>
      </nav>
    </header>
  );
};
export default Header;
