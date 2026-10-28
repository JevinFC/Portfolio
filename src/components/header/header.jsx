import { useEffect, useState } from "react";
import "./header.scss";
import { t } from "../../texts.js";

const LINKS = [
  { path: "/", key: "home" },
  { path: "/realisations", key: "projects" },
  { path: "/qui-suis-je", key: "about" },
];

function Header({ current = "/" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const onHome = current === "/";

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
        <a
          className="headerBrand"
          href={onHome ? "#accueil" : "/"}
          aria-label="Hachado"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="headerLogo"
            src="/logo-hachado-h.webp"
            alt=""
            width="303"
            height="380"
          />
          <span aria-hidden="true">achado</span>
        </a>

        <nav className="navHeader" id="mainNav">
          <div className="navHeaderInner">
            {LINKS.map((link) => (
              <a
                key={link.path}
                href={onHome && link.path === "/" ? "#accueil" : link.path}
                aria-current={
                  current === link.path
                    ? "page"
                    : current.startsWith(`${link.path}/`)
                      ? "true"
                      : undefined
                }
                onClick={() => setMenuOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </nav>

        <div className="headerActions">
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
