/* eslint-disable react/prop-types */
import "./TittleCard.css"

const TittleCard = ({title, color}) => {
  return (
    <div className="tittle-card" style={{background:`${color}`}}>
      <p className="texto">{title}</p>
    </div>
  );
};
export default TittleCard;