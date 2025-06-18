import "./cardProjects.scss";

function CardProjects({ linkProjects, imgProjects, titleProjects, descriptionProjects, competences, githubProjects }) {
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
             {linkProjects && (
    <a href={linkProjects} target="_blank" rel="noreferrer">
      Voir le site du projet
    </a>
  )}

  {/* Affiche toujours le lien GitHub */}
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