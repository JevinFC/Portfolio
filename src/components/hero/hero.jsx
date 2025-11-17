import "./hero.scss";
import { useEffect, useState } from "react";
// import { FaArrowDown } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../languageContext";

function Hero() {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const fullText = t("frontendDev");

  useEffect(() => {
  const chars = Array.from(fullText); // Gère correctement les caractères
  let index = 0;

  const interval = setInterval(() => {
    setDisplayText(chars.slice(0, index + 1).join(""));
    index++;

    if (index === chars.length) {
      clearInterval(interval);
    }
  }, 100);

  return () => clearInterval(interval);
}, [fullText]);


  return (
    <div className="hero" id="accueil">
      <div className="heroContent">
        <div className="heroText">
          <div className="containerTitle">
            <h1 className="heroTitle">
              <span className="h1hello">{t("hello")}</span><br />
              <span className="typing-text">{displayText}</span>
            </h1>
          </div>
          <p className="heroDescription">
            {t("heroSubtitle")}
          </p>
          <div className="linkHero">
            <a href="#projects">{t("discoverProjects")}</a>
            <a href="#contact">{t("contact")}</a>
          </div>
          <div className="socialHero">
            <a
              href="https://www.linkedin.com/in/kevin-machado-devfront"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a
              href="https://www.github.com/JevinFC"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="#contact" className="social-link">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="divFlecheBas">
        <a href="#projects">
          <FaArrowDown />
        </a>
      </div> */}
    </div>
  );
}

export default Hero;
