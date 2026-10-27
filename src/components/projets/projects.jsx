import { useState, useRef, useLayoutEffect } from "react";
import "./projects.scss";
import BrowserFrame from "../ui/browserFrame.jsx";
import ProjectRow, { ProjectLinks } from "./ProjectRow.jsx";
import { client, examples } from "../../data/projects.js";
import { t } from "../../texts.js";

function Projects() {
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

    root
      .querySelectorAll(".projectRow, .exampleCard")
      .forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects" aria-labelledby="projectsTitle">
      <div
        className={animate ? "projectsInner js-reveal" : "projectsInner"}
        ref={rootRef}
      >
        <h2 className="projectsTitle" id="projectsTitle">{t("projectsTitle")}</h2>
        <p className="projectsSubtitle">{t("projectsSubtitle")}</p>

        <ProjectRow project={client} />

        <div className="projectExamples">
          <h3 className="projectExamplesTitle">{t("projectsExamplesTitle")}</h3>
          <p className="projectExamplesText">{t("projectsExamplesText")}</p>

          <div className="projectExamplesGrid">
            {examples.map((example) => (
              <article className="exampleCard" key={example.key}>
                <BrowserFrame
                  src={example.image.src}
                  alt={example.image.alt}
                  width={example.image.width}
                  height={example.image.height}
                  className="exampleFrame"
                />
                <span className="projectStatus">{example.status}</span>
                <h4 className="exampleName">{example.name}</h4>
                <p className="exampleRole">
                  {example.role} · formule « {example.offer} »
                </p>
                <p className="exampleText">{example.summary}</p>
                <ProjectLinks links={example.links} name={example.name} />
              </article>
            ))}
          </div>

          <a className="projectsAll" href="/realisations">
            {t("projectsAll")}
            <span className="projectArrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

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
