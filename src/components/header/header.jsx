import { useEffect, useState } from "react";
import "./header.scss";
import { useLanguage } from "../languageContext";

function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="headerPortfolio">
        <h1 className="h1header">{t("portfolio")}</h1>
        <nav className="navHeader">
          <a href="#accueil">{t("home")}</a>
          <a href="#apropos">{t("about")}</a>
          {/* <a href="#competences">Compétences</a> */}
          <a href="#projects">{t("projects")}</a>
          <a href="/CV_Kevin_Machado.pdf" download="CV_Kevin_Machado.pdf">{t("CV")}</a>
        </nav>
        <button
        onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
        className="languageButton"
      >
        {language.toUpperCase()}
      </button>
      </div>
    </header>
  );
}

export default Header;
