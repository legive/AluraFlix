import "./Player.css"
const Player = () => {
    return (
      <div >
        <iframe className="player"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PlaQ913yggM?si=J6nugUvqqXrSW_Tb"
          title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         
          allowfullscreen
        ></iframe>
      </div>
    );
}
export default Player