import CardProjects from "./cardprojects.jsx";
import "./projects.scss";
function Projects() {
  return (
    <section id="projects">
    <h1 className="titleProjects">Mes Projets</h1>
    <div className="containerProjects">
      <CardProjects
      imgProjects={"/src/assets/imgprojects/booki.png"}
        linkProjects="http://jevinfc.github.io/P2-Booki-KM/#"
        titleProjects="Booki"
        competences={["HTML", "CSS"]}
        descriptionProjects="Ce projet est un site de réservation d'hébergements. Il m'a permis de mettre en pratique mes compétences en HTML et CSS."
      />
      <CardProjects
      imgProjects={"/src/assets/imgprojects/sophieBluel.png"}
        linkProjects="https://jevinfc.github.io/projet-3-KM/"
        titleProjects="Sophie Bluel"
        competences={["JavaScript"]}
        descriptionProjects="Ce projet est un site vitrine pour une artiste. Il m'a permis d'apprendre à utiliser JavaScript pour ajouter des interactions dynamiques."
      />
      <CardProjects
      imgProjects={"/src/assets/imgprojects/ninaCarducci.png"}
        linkProjects="https://jevinfc.github.io/Projet-4-KM-master/"
        titleProjects="Nina Carducci"
        competences={["SEO"]}
        descriptionProjects="Ce projet est un site de portfolio pour une photographe. Il m'a permis de travailler sur le SEO d'un site web et d'améliorer mes compétences en accessibilité."
      />
      <CardProjects
        imgProjects={"/src/assets/imgprojects/kasa.png"}
        linkProjects="http://kasa-75g.pages.dev"
        titleProjects="Kasa"
        competences={["React", "SCSS"]}
        descriptionProjects="Ce projet est une application de location d'appartements. Il m'a permis de mettre en pratique mes compétences en React et de travailler sur la gestion des états."
      />
      <CardProjects
      imgProjects={"/src/assets/imgprojects/MVG.png"}
        linkProjects="http://mon-vieux-grimoire-8d0.pages.dev"
        titleProjects="Mon Vieux Grimoire"
        competences={["Node.js", "MongoDB"]}
        descriptionProjects="Ce projet est un site de gestion de livres Il m'a permis d'apprendre à utiliser Node.js pour créer une API et de travailler avec une base de données MongoDB."
      />
      <CardProjects
      imgProjects={"/src/assets/imgprojects/menuMaker.png"}
        linkProjects="https://github.com/JevinFC/Projet7"
        titleProjects="Qwenta"
        competences={["Gestion de projet"]}
        descriptionProjects="Ce projet est un site de gestion de menus pour un restaurant. Il m'a permis de travailler sur la gestion d'un projet."
      />
    </div>
     </section>
  );
}
export default Projects;