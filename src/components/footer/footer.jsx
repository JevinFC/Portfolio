import "@fortawesome/fontawesome-svg-core/styles.css";
import "./footer.scss";
import { t } from "../../texts.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
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
          <a
            href="https://www.instagram.com/hachado_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footerInstagram")}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61595171716254"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footerFacebook")}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/#contact" aria-label={t("footerEmail")}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <p className="footerMade">{t("footerMade")}</p>
        <p className="footerCopyright" suppressHydrationWarning>
          {t("footerCopyright").replace("{year}", new Date().getFullYear())}
        </p>
        <p className="footerLinks footerPages">
          {t("footerPages").map((page) => (
            <a key={page.href} className="footerLegal" href={page.href}>
              {page.label}
            </a>
          ))}
        </p>
        <p className="footerLinks">
          <a
            className="footerLegal"
            href="/mentions-legales"
            rel="noopener noreferrer"
          >
            {t("footerLegal")}
          </a>
          <a
            className="footerLegal"
            href="/cgv"
            rel="noopener noreferrer"
          >
            {t("footerCgv")}
          </a>
          <a
            className="footerLegal"
            href="/politique-confidentialite"
            rel="noopener noreferrer"
          >
            {t("footerPrivacy")}
          </a>
          <button type="button" className="footerLegal footerCookies" data-consent-open>
            {t("footerCookies")}
          </button>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
