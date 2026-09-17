import "./footer.scss";
import { useLanguage } from "../languageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div className="footerPortfolio">
        <div className="footerSocial">
          <a
            href="https://www.linkedin.com/in/kevin-machado-devfront"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footerLinkedin")}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#contact" aria-label={t("footerEmail")}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <p>© 2025 - Kévin Machado</p>
        <p>{t("developpedBy")}</p>
        <p className="footerLinks">
          <a
            className="footerLegal"
            href="/mentions-legales.html"
            rel="noopener noreferrer"
          >
            {t("footerLegal")}
          </a>
          <a
            className="footerLegal"
            href="/cgv.html"
            rel="noopener noreferrer"
          >
            {t("footerCgv")}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
