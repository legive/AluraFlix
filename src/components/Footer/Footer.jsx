import "./Footer.css";
import logo from "./img/LogoMain.png";
import { Link } from "react-router-dom";
import BotonHome from "../BotonHome/BotonHome"
import BotonNew from "../BotonNew/BotonNew"

const Header = () => {
  return (
    <header className="footer">
      <div className="elementos">
        <img src={logo} alt="logo" />
        <h2>Desarrollado por Leyla Vasquez</h2>
      </div>

      <div className="botones-footer">
        <Link to="/">
          <BotonHome texto="HOME" />
        </Link>

        <Link to="/new">
          <BotonNew texto="NUEVO VIDEO" />
        </Link>
      </div>
    </header>
  );
};
export default Header;
