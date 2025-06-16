import "./cardCompetence.scss";
import "./cardCompetence.scss";

function CardCompetence({ title, description }) {
  return (
    <div className="containerCard">
      <div className="cardInner">
        <div className="cardFront">
          <h2>{title}</h2>
        </div>
        <div className="cardBack">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardCompetence;
