import { useState } from "react";
import "./hero.scss";
import BrowserFrame from "../ui/browserFrame.jsx";
import HeroCut from "../HeroCut/HeroCut.jsx";
import { useLanguage } from "../languageContext";

function Hero() {
  const { t } = useLanguage();
  const [shopUrl, setShopUrl] = useState("");

  return (
    <section className="hero" id="accueil" aria-labelledby="heroTitle">
      <div className="heroInner">
        <div className="heroText">
          <p className="heroEyebrow">{t("heroEyebrow")}</p>

          <h1 className="heroTitle" id="heroTitle">
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
          <BrowserFrame url={shopUrl} className="heroBrowser">
            <HeroCut onShopChange={(shop) => setShopUrl(shop.url)} />
          </BrowserFrame>
        </div>
      </div>
    </section>
  );
}

export default Hero;
