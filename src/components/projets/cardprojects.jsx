import { useState } from "react";
import "./cardProjects.scss";

function CardProjects({
  linkProjects,
  imgProjects,
  titleProjects,
  descriptionProjects,
  competences,
  githubProjects,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="containerProjects">
      <div className={`cardProjects ${isFlipped ? "flipped" : ""}`}>
        <div className="cardInner">
          <div className="cardFront">
            <img src={imgProjects} alt={titleProjects} className="imgProjects" />
            <h1>{titleProjects}</h1>
            <ul className="skillsList">
              {competences?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <button className="flipButton" onClick={(e) => { e.stopPropagation(); toggleFlip(); }}>
  Voir plus
</button>
          </div>
          <div className="cardBack">
            <h1>{titleProjects}</h1>
            <p>{descriptionProjects}</p>
            {linkProjects && (
              <a href={linkProjects} target="_blank" rel="noreferrer">
                Voir le site du projet
              </a>
            )}
            <a href={githubProjects} target="_blank" rel="noreferrer">
              Voir le GitHub
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProjects;