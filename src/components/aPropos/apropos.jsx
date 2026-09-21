import "./apropos.scss";
import { useState, useRef, useLayoutEffect } from "react";
import { useLanguage } from "../languageContext";

function APropos() {
  const { t } = useLanguage();
  const [animate, setAnimate] = useState(false);
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setAnimate(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    root.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="apropos" id="apropos">
      <div
        className={animate ? "aproposInner js-reveal" : "aproposInner"}
        ref={rootRef}
      >
        <div className="aproposPhoto reveal">
          <img
            src="/photoProfil.webp"
            alt={t("aboutPhotoAlt")}
            width="760"
            height="833"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="aproposContent">
          <h2 className="aproposTitle reveal">{t("aboutHeading")}</h2>
          <p className="aproposSubtitle reveal">{t("aboutSubtitle")}</p>

          <p className="aproposLead reveal">{t("aboutP1")}</p>
          <p className="aproposText reveal">{t("aboutP2")}</p>
          <p className="aproposText reveal">{t("aboutP3")}</p>
          <p className="aproposText reveal">{t("aboutP4")}</p>
          <p className="aproposText reveal">{t("aboutP5")}</p>

          <ul className="aproposFacts reveal">
            <li>{t("aboutFact1")}</li>
            <li>
              <a
                href="/mentions-legales.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("aboutFact2")}
              </a>
            </li>
            <li>{t("aboutFact3")}</li>
            <li>{t("aboutFact4")}</li>
          </ul>

          <p className="aproposTech reveal">{t("aboutTech")}</p>
        </div>
      </div>
    </section>
  );
}

export default APropos;
