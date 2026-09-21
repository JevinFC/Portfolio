import { useState, useRef, useLayoutEffect } from "react";
import "./projects.scss";
import BrowserFrame from "../ui/browserFrame.jsx";
import { useLanguage } from "../languageContext.jsx";
import imgNinaCarducci from "/src/assets/imgprojects/ninaCarducci.webp";
import imgKasa from "/src/assets/imgprojects/kasa.webp";
import imgPortfolioLola from "/src/assets/imgprojects/screenshotLola.webp";

function Projects() {
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
      { threshold: 0.2 }
    );

    root.querySelectorAll(".projectRow").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      key: "lola",
      img: imgPortfolioLola,
      width: 1704,
      height: 3744,
      link: "https://lolagauchy.fr",
      featured: true,
    },
    {
      key: "kasa",
      img: imgKasa,
      width: 1704,
      height: 2941,
      link: "https://kasa.kevinmachado.dev",
    },
    {
      key: "nina",
      img: imgNinaCarducci,
      width: 1704,
      height: 4537,
      link: "https://jevinfc.github.io/Projet-4-KM-master/",
    },
  ];

  const cap = (key) => key.charAt(0).toUpperCase() + key.slice(1);

  return (
    <section className="projects" id="projects" aria-labelledby="projectsTitle">
      <div
        className={animate ? "projectsInner js-reveal" : "projectsInner"}
        ref={rootRef}
      >
        <h2 className="projectsTitle" id="projectsTitle">{t("projectsTitle")}</h2>
        <p className="projectsSubtitle">{t("projectsSubtitle")}</p>

        {projects.map((project, index) => {
          const name = t(`project${cap(project.key)}Name`);
          return (
            <article
              key={project.key}
              className={index % 2 === 1 ? "projectRow reversed" : "projectRow"}
            >
              <div className="projectVisual">
                <BrowserFrame
                  src={project.img}
                  alt={t(`project${cap(project.key)}Alt`)}
                  width={project.width}
                  height={project.height}
                  className="projectFrame"
                />
              </div>

              <div className="projectBody">
                <span
                  className={
                    project.featured
                      ? "projectStatus projectStatus--client"
                      : "projectStatus"
                  }
                >
                  {t(`project${cap(project.key)}Status`)}
                </span>

                <h3 className="projectName">{name}</h3>
                <p className="projectRole">{t(`project${cap(project.key)}Role`)}</p>
                <p className="projectText">{t(`project${cap(project.key)}Text`)}</p>

                <ul className="projectTags">
                  {t(`project${cap(project.key)}Tags`).map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>

                <a
                  className="projectLink"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("projectLink")} — ${name}`}
                >
                  {t("projectLink")}
                  <span className="projectArrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          );
        })}

        <article className="projectRow reversed projectRow--cta">
          <div className="projectVisual">
            <div className="projectSlot">
              <span>{t("projectsCtaPlaceholder")}</span>
            </div>
          </div>

          <div className="projectBody">
            <h3 className="projectName">{t("projectsCtaTitle")}</h3>
            <p className="projectText">{t("projectsCtaText")}</p>
            <a className="projectCta" href="#contact">
              {t("projectsCtaButton")}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
