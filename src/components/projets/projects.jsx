import CardProjects from "./cardprojects.jsx";
import "./projects.scss";
import imgBooki from "/src/assets/imgprojects/booki.png";
import imgSophieBluel from "/src/assets/imgprojects/sophieBluel.png";
import imgNinaCarducci from "/src/assets/imgprojects/ninaCarducci.png";
import imgKasa from "/src/assets/imgprojects/kasa.png";
import imgMVG from "/src/assets/imgprojects/MVG.png";
import imgMenuMaker from "/src/assets/imgprojects/menuMaker.png";
function Projects() {
  return (
    <section id="projects">
    <h1 className="titleProjects">Mes Projets</h1>
    <div className="containerProjects">
      <CardProjects
      imgProjects={imgBooki}
        linkProjects="https://booki.kevinmachado.dev"
        titleProjects="Booki"
        githubProjects="https://github.com/JevinFC/P2-Booki-KM"
        competences={["HTML", "CSS"]}
        descriptionProjects="Ce projet est un site de réservation d'hébergements. Il m'a permis de mettre en pratique mes compétences en HTML et CSS."
      />
      <CardProjects
      imgProjects={imgSophieBluel}
        linkProjects="https://sophiebluel.kevinmachado.dev"
        githubProjects="https://github.com/JevinFC/projet-3-KM"
        titleProjects="Sophie Bluel"
        competences={["JavaScript"]}
        descriptionProjects="Ce projet est un site vitrine pour une artiste. Il m'a permis d'apprendre à utiliser JavaScript pour ajouter des interactions dynamiques."
      />
      <CardProjects
      imgProjects={imgNinaCarducci}
        linkProjects="https://jevinfc.github.io/Projet-4-KM-master/"
        githubProjects="https://github.com/JevinFC/Projet-4-KM-master"
        titleProjects="Nina Carducci"
        competences={["SEO"]}
        descriptionProjects="Ce projet est un site de portfolio pour une photographe. Il m'a permis de travailler sur le SEO d'un site web et d'améliorer mes compétences en accessibilité."
      />
      <CardProjects
        imgProjects={imgKasa}
        linkProjects="https://kasa.kevinmachado.dev"
        githubProjects="https://github.com/JevinFC/Kasa"
        titleProjects="Kasa"
        competences={["React", "SCSS"]}
        descriptionProjects="Ce projet est une application de location d'appartements. Il m'a permis de mettre en pratique mes compétences en React et de travailler sur la gestion des états."
      />
      <CardProjects
      imgProjects={imgMVG}
        linkProjects="https://mvg.kevinmachado.dev"
        githubProjects="https://github.com/JevinFC/MonVieuxGrimoireP6"
        titleProjects="Mon Vieux Grimoire"
        competences={["Node.js", "MongoDB"]}
        descriptionProjects="Ce projet est un site de gestion de livres Il m'a permis d'apprendre à utiliser Node.js pour créer une API et de travailler avec une base de données MongoDB."
      />
      <CardProjects
      imgProjects={imgMenuMaker}
        titleProjects="Qwenta"
        githubProjects="https://github.com/JevinFC/Projet7"
        competences={["Gestion de projet"]}
        descriptionProjects="Ce projet est un site de gestion de menus pour un restaurant. Il m'a permis de travailler sur la gestion d'un projet."
      />
    </div>
     </section>
  );
}
export default Projects;