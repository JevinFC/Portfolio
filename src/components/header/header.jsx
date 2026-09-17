import { useEffect, useState } from "react";
import "./header.scss";
import { useLanguage } from "../languageContext";
import AxeIcon from "../ui/axeIcon.jsx";

function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className={menuOpen ? "headerPortfolio open" : "headerPortfolio"}>
        <h2 className="h2header">
          <AxeIcon className="headerLogo" />
          {t("portfolio")}
        </h2>

        <nav className="navHeader" id="mainNav">
          <div className="navHeaderInner">
            <a href="#accueil" onClick={() => setMenuOpen(false)}>
              {t("home")}
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              {t("projects")}
            </a>
            <a href="#apropos" onClick={() => setMenuOpen(false)}>
              {t("about")}
            </a>
          </div>
        </nav>

        <div className="headerActions">
          <button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="languageButton"
          >
            {language.toUpperCase()}
          </button>

          <button
            type="button"
            className="burgerButton"
            aria-expanded={menuOpen}
            aria-controls="mainNav"
            aria-label={menuOpen ? t("navClose") : t("navOpen")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
