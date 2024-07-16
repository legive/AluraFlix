import TittleButton from "../TitleButton/TittleButton"
import "./Wrappertext.css"
const Wrappertext = () => {
    return (
      <div className="wrapped-text">
       <TittleButton></TittleButton>
        <h1>Challenge React</h1>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
    );
}
export default Wrappertext