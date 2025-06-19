import "./hero.scss";
import { FaArrowDown } from "react-icons/fa6";
import html5 from "/src/assets/icons/html.png";
import css from "/src/assets/icons/css.png";
import javascript from "/src/assets/icons/javascript.png";
import reactjs from "/src/assets/icons/react.png";
import nodejs from "/src/assets/icons/nodejs.png";
import mongodb from "/src/assets/icons/mongodb.png";

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
            <img src={html5} alt="image HTML5" />
            <img src={css} alt="CSS" />
            <img src={javascript} alt="JavaScript" />
            <img src={reactjs} alt="React" />
            <img src={nodejs} alt="Node.js" />
            <img src={mongodb} alt="MongoDB" />
            <img src={html5} alt="image HTML5" />
            <img src={css} alt="CSS" />
            <img src={javascript} alt="JavaScript" />
            <img src={reactjs} alt="React" />
            <img src={nodejs} alt="Node.js" />
            <img src={mongodb} alt="MongoDB" />
          </div>
        </div>
      </div>

      <div className="divFlecheBas">
        <a href="#projects">
        <FaArrowDown />
        </a>
      </div>
    </div>
  );
}
export default Hero;
