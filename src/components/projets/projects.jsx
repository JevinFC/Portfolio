import CardProjects from "./cardprojects.jsx";
import "./projects.scss";
import imgBooki from "/src/assets/imgprojects/booki.png";
import imgSophieBluel from "/src/assets/imgprojects/sophieBluel.png";
import imgNinaCarducci from "/src/assets/imgprojects/ninaCarducci.png";
import imgKasa from "/src/assets/imgprojects/kasa.png";
import imgMVG from "/src/assets/imgprojects/MVG.png";
import imgMenuMaker from "/src/assets/imgprojects/menuMaker.png";
import { useLanguage } from "../languageContext.jsx";
function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects">
    <h1 className="titleProjects">{t("projectsTitle")}</h1>
    <div className="containerProjects">
      <CardProjects
      imgProjects={imgBooki}
        linkProjects="https://booki.kevinmachado.dev"
        titleProjects={t("project1Title")}
        githubProjects="https://github.com/JevinFC/P2-Booki-KM"
        competences={["HTML", "CSS"]}
        descriptionProjects={t("project1Desc")}
      />
      <CardProjects
      imgProjects={imgSophieBluel}
        linkProjects="https://sophiebluel.kevinmachado.dev"
        githubProjects="https://github.com/JevinFC/projet-3-KM"
        titleProjects={t("project2Title")}
        competences={["JavaScript"]}
        descriptionProjects={t("project2Desc")}
      />
      <CardProjects
      imgProjects={imgNinaCarducci}
        linkProjects="https://jevinfc.github.io/Projet-4-KM-master/"
        githubProjects="https://github.com/JevinFC/Projet-4-KM-master"
        titleProjects={t("project3Title")}
        competences={["SEO"]}
        descriptionProjects={t("project3Desc")}
      />
      <CardProjects
        imgProjects={imgKasa}
        linkProjects="https://kasa.kevinmachado.dev"
        githubProjects="https://github.com/JevinFC/Kasa"
        titleProjects={t("project4Title")}
        competences={["React", "SCSS"]}
        descriptionProjects={t("project4Desc")}
      />
      <CardProjects
      imgProjects={imgMVG}
        linkProjects="https://mvg.kevinmachado.dev"
        githubProjects="https://github.com/JevinFC/MonVieuxGrimoireP6"
        titleProjects={t("project5Title")}
        competences={["Node.js", "MongoDB"]}
        descriptionProjects={t("project5Desc")}
      />
      <CardProjects
      imgProjects={imgMenuMaker}
        titleProjects={t("project6Title")}
        githubProjects="https://github.com/JevinFC/Projet7"
        competences={[t("gestionDeProjet")]}
        descriptionProjects={t("project6Desc")}
      />
    </div>
     </section>
  );
}
export default Projects;