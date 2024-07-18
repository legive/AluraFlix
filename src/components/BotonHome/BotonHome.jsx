/* eslint-disable react/prop-types */ // Disables prop-types linting for this file
import "./BotonHome.css"; // Importing CSS styles specific to BotonHome
import home from "./home.png"; // Importing the home.png image

const BotonHome = ({ texto }) => {
    // Functional component receiving 'texto' as a prop
    console.log(home)
  return (
    <div className="">
     
      <button className="btn-home">
        <img src={home} alt="Home Icon" />
        {texto}
      </button>
    
    </div>
  );
};

export default BotonHome; // Exporting the BotonHome component for use in other files
