import React, { createContext, useContext, useState } from "react";

const translations = {
  fr: {
    // Header
    portfolio: "Mon Portfolio",
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    CV: "CV",
    contact: "Contactez-moi",

    // Hero
    hello: "Bonjour",
    frontendDev: "Développeur Frontend",
    heroSubtitle: "Créateur d'expériences web dynamiques et intuitives",
    discoverProjects: "Découvrez mes projets",

    // About
    aboutTitle: "À Propos de moi",
    aboutText1:
      "Je m'appelle Kévin Machado, je suis développeur Frontend Freelance passionné par la création d'interfaces web modernes et intuitives. Spécialisé dans React, je transforme vos idées en expériences digitales mémorables.",

    // Projects
    projectsTitle: "Mes Projets",
    project1Title: "Booki",
    project1Desc:
      "Ce projet est un site de réservation d'hébergement. Il m'a permis de mettre en pratique mes compétences en HTML5 et CSS3.",
    project2Title: "Sophie Bluel",
    project2Desc:
      "Ce projet est un site vitrine pour une artiste. Il m'a permis d'apprendre à utiliser JavaScript pour ajouter des interactions dynamiques.",
    project3Title: "Nina Carducci",
    project3Desc:
      "Ce projet est un site de portfolio pour une photographe. Il m'a permis de travailler sur le SEO d'un site web et d'améliorer mes compétences en accessibilité.",

    project4Title: "Kasa",
    project4Desc:
    "Ce projet est une plateforme de location immobilière. Il m'a permis de renforcer mes compétences en React, notamment en gestion d'état et en routage.",
    project5Title: "Mon Vieux Grimoire",
    project5Desc:"Ce projet est un site de gestion de livres. Il m'a permis d'apprendre à utiliser Node.js pour créer une API et de travailler avec une base de données MongoDB.",
    project6Title: "Qwenta",
    project6Desc:"Ce projet est un site de gestion de menus pour un restaurant. Il m'a permis de travailler sur la gestion d'un projet. Et de découvrir la méthodologie Agile.",
    githubProject:"Voir le GitHub du projet",
    linkProject:"Voir le site du projet",
    gestionDeProjet:"Gestion de projet",

    // Contact
    contactTitle: "Contact",
    yourName: "Votre nom",
    yourEmail: "Votre email",
    yourMessage: "Votre message",
    sendMessage: "Envoyer le message",
    messageSent: "Message envoyé avec succès !",

    // Footer
    allRights: "Tous droits réservés",
    developpedBy: "Développé par Kévin Machado"
  },
  en: {
    portfolio: "My Portfolio",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    CV: "CV",
    contact: "Contact me",

    hello: "Hello",
    frontendDev: "Frontend Developer",
    heroSubtitle: "Creating dynamic and intuitive web experiences",
    discoverProjects: "Discover my projects",

    aboutTitle: "About Me",
    aboutText1:
      "My name is Kevin Machado, a freelance frontend developer passionate about creating modern and intuitive web interfaces. I am specialized in React and I turn your ideas into memorable digital experiences.",

    projectsTitle: "My Projects",
    project1Title: "Booki",
    project1Desc:
      "This project is a booking site for accommodations. It allowed me to practice my skills in HTML5 and CSS3.",
    project2Title: "Sophie Bluel",
    project2Desc: "This project is a showcase site for an artist. It allowed me to learn how to use JavaScript to add dynamic interactions.",
    project3Title: "Nina Carducci",
    project3Desc:
      "This project is a portfolio site for a photographer. It allowed me to work on the SEO of a website and improve my accessibility skills.",
    project4Title: "Kasa",
    project4Desc:
    "This project is a real estate rental platform. It allowed me to strengthen my skills in React, particularly in state management and routing.",
    project5Title: "Mon Vieux Grimoire",
    project5Desc:"This project is a book management site. It allowed me to learn how to use Node.js to create an API and work with a MongoDB database.",
    project6Title: "Qwenta",
    project6Desc:"This project is a menu management site for a restaurant. It allowed me to work on project management and discover Agile methodology.",
    githubProject:"See the project's GitHub",
    linkProject:"See the project's website",
    gestionDeProjet:"Project management",

    contactTitle: "Contact",
    yourName: "Your name",
    yourEmail: "Your email",
    yourMessage: "Your message",
    sendMessage: "Send message",
    messageSent: "Message sent successfully!",

    allRights: "All rights reserved",
    developpedBy: "Developed by Kevin Machado"
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
