import "./competences.scss";
import CardCompetence from "./cardCompetence.jsx";

function Competences() {
  return (
    <div className="competences">
      <CardCompetence
        title="Développement Web"
        description="HTML, CSS, JavaScript"
      />
      <CardCompetence title="Frameworks JS" description="React, Node.js" />
      <CardCompetence
        title="Bases de données"
        description="MongoDB, mongoose"
      />
    </div>
  );
}
export default Competences;
