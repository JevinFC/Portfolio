import "./hero.scss";
import { FaArrowDown } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero">
      <div className="heroContent">
        <div className="heroText">
          <div className="containerTitle">
            <h2 className="heroTitle">Hello World !</h2>
          </div>
          <p className="heroDescription">
            Je suis un développeur web passionné, spécialisé dans la conception d’applications modernes, performantes et réactives. 
            Curieux et rigoureux, j’aime transformer des idées en interfaces fonctionnelles et intuitives. 
            Explorez mes projets pour découvrir mes compétences en développement front-end (HTML, CSS, JavaScript, React) ainsi qu’en back-end (Node.js, MongoDB), 
            et mon approche centrée sur l’expérience utilisateur.
          </p>
        </div>
        <div className="heroSkills">
          <div className="skillSlider">
            <img src="/src/assets/icons/html.png" alt="image HTML5" />
            <img src="/src/assets/icons/css.png" alt="CSS" />
            <img src="/src/assets/icons/javascript.png" alt="JavaScript" />
            <img src="/src/assets/icons/react.png" alt="React" />
            <img src="/src/assets/icons/nodejs.png" alt="Node.js" />
            <img src="/src/assets/icons/mongodb.png" alt="MongoDB" />
             <img src="/src/assets/icons/html.png" alt="image HTML5" />
            <img src="/src/assets/icons/css.png" alt="CSS" />
            <img src="/src/assets/icons/javascript.png" alt="JavaScript" />
            <img src="/src/assets/icons/react.png" alt="React" />
            <img src="/src/assets/icons/nodejs.png" alt="Node.js" />
            <img src="/src/assets/icons/mongodb.png" alt="MongoDB" />
          </div>
        </div>
      </div>
      {/* <div className="divBtnProjets">
        <button className="btnProjets">Aller voir les projets</button>
      </div> */}
      {/* AJOUTER ONCLICK POUR ALLER VERS LA SECTION PROJETS */}
      <div className="divFlecheBas">
        <a href="#projects">
        <FaArrowDown />
        </a>
      </div>
    </div>
  );
}
export default Hero;
