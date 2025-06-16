import "./cardProjects.scss";

function CardProjects({ linkProjects, imgProjects, titleProjects, descriptionProjects, competences }) {
  return (
    <div className="containerProjects">
      <div className="cardProjects">
        <div className="cardInner">
          <div className="cardFront">
            <img src={imgProjects} alt={titleProjects} className="imgProjects" />
            <h1>{titleProjects}</h1>
            <ul className="skillsList">
              {competences?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="cardBack">
            <h1>{titleProjects}</h1>
            <p>{descriptionProjects}</p>
            <a href={linkProjects} target="_blank" rel="noreferrer">Voir le projet</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProjects;