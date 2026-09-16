import "./hero.scss";
import BrowserFrame from "../ui/browserFrame.jsx";
import { useLanguage } from "../languageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="accueil">
      <div className="heroInner">
        <div className="heroText">
          <p className="heroEyebrow">{t("heroEyebrow")}</p>

          <h1 className="heroTitle">
            {t("heroTitle")}
          </h1>

          <p className="heroLead">{t("heroText")}</p>

          <div className="heroActions">
            <a href="#contact" className="heroCta">
              {t("heroCta")}
            </a>
            <a href="#projects" className="heroLink">
              {t("heroLink")}
              <span className="heroArrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <p className="heroTrust">{t("heroTrust")}</p>
        </div>

        <div className="heroShowcase">
          <BrowserFrame
            src="/realisations/hero.png"
            alt={t("heroShotAlt")}
            width="1200"
            height="750"
            eager
            className="heroBrowser"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
