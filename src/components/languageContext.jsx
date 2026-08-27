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
    frontendDev: "Développeur Web basé à Tours",
    heroSubtitle: "Créateur d'expériences web dynamiques et intuitives",
    discoverProjects: "Découvrez mes projets",

    // About
    aboutTitle: "À Propos de moi",
    aboutText1:
      "Je m'appelle <span class='importantHover'>Kévin Machado</span>, je suis <span class='importantHover'>développeur basé à Tours</span> et passionné par la création d'interfaces web <span class='importantHover'>modernes</span> et <span class='importantHover'>intuitives</span>. Spécialisé dans <span class='importantHover'>React</span>, je conçois et développe des sites web performants qui transforment vos idées en expériences <span class='importantHover'>digitales mémorables</span>.",

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
    project7Title: "Portfolio Lola Gauchy",
    project7Desc:"Ce projet est un site de portfolio pour une freelance en marketing digital. Il m'a permis de travailler avec Next.js et TailwindCSS pour créer un site web moderne et responsive.",
    githubProject:"Voir le GitHub du projet",
    linkProject:"Voir le site du projet",
    gestionDeProjet:"Gestion de projet",
    seeMore:"Voir plus",

    // Tarifs
    pricingTitle: "Mes Tarifs",
    pricingCta: "Choisir ce pack",

    // Basic
    basicTitle: "Basique",
    basicPrice: "749.99 €",
    basicSubtitle: "Section unique — landing à un bloc",
    basicDescription: "Une section React moderne et responsive construite selon votre design.",
    basicFeatures: [
      "Site fonctionnel",
      "Intégration du contenu",
      "Formulaire opt-in",
      "Optimisation des performances",
      "Configuration hébergement",
      "Icônes réseaux sociaux",
      "1 page",
      "1 plugin/extension",
      "1 produit",
      "1 révision"
    ],
    basicDelivery: "Livraison : 3 jours",

    // Standard
    standardTitle: "Standard",
    standardBadge: "⭐ Best Seller",
    standardPrice: "1749.99 €",
    standardSubtitle: "Landing page complète (3–5 sections)",
    standardDescription: "Landing moderne construite en React, pixel-perfect et totalement responsive.",
    standardFeatures: [
      "Site fonctionnel",
      "Intégration du contenu",
      "Formulaire opt-in",
      "Optimisation des performances",
      "Configuration hébergement",
      "Icônes réseaux sociaux",
      "1 page",
      "3 plugins/extensions",
      "1 produit",
      "3 révisions"
    ],
    standardDelivery: "Livraison : 7 jours",

    // Premium
    premiumTitle: "Premium",
    premiumBadge: "🔥 Recommandé",
    premiumPrice: "3299.99 €",
    premiumSubtitle: "Landing + Animations + SEO complet",
    premiumDescription: "Landing premium avec animations, SEO détaillé et performances maximales.",
    premiumFeatures: [
      "Site fonctionnel",
      "Intégration du contenu",
      "Formulaire opt-in",
      "Optimisation des performances",
      "Configuration hébergement",
      "Icônes réseaux sociaux",
      "2-3 page",
      "5 plugins/extensions",
      "1 produit",
      "Révisions illimitées"
    ],
    premiumDelivery: "Livraison : 14 jours",


    // Contact
    contactTitle: "Contact",
    yourName: "Votre nom",
    yourEmail: "Votre email",
    yourMessage: "Votre message",
    sendMessage: "Envoyer le message",
    messageSent: "Message envoyé avec succès !",

    //FAQ

     faqTitle: "FAQ",
    faq: [
      {
        question: "Pouvez-vous rendre ma page d'atterrissage responsive ?",
        answer: "Absolument ! Chaque page d'atterrissage que je construis est entièrement responsive et fonctionne parfaitement sur mobile, tablette et ordinateur."
      },
      {
        question: "Gérez-vous le déploiement ?",
        answer:
          "Oui, je peux déployer votre page d'atterrissage sur Vercel, Netlify ou votre hébergeur préféré. Si vous n'avez pas besoin de déploiement, je fournirai un projet React prêt à l'emploi."
      },
      {
        question: "Pouvez-vous ajouter des animations ou des éléments interactifs ?",
        answer:
          "Oui ! Je peux inclure des animations fluides avec Framer Motion et des éléments interactifs comme des sliders, boutons ou formulaires."
      },
      {
        question: "Que faire si je n'ai pas de design prêt ?",
        answer:
          "Si vous n'avez pas de design, je peux quand même créer une page d'atterrissage moderne en suivant les meilleures pratiques, mais avoir un design accélère la livraison et garantit que la page correspond à votre vision."
      },
      
      {
        question: "Optimisez-vous la landing page pour le SEO ?",
        answer:
          "Oui ! J'inclus une optimisation SEO de base, comme une structure HTML correcte, des balises meta et un code React performant."
      },
      {
        question: "Qu'est-ce qui vous différencie des autres développeurs ?",
        answer:
          "Je me concentre sur des designs pixel-perfect, la responsivité et un code React propre. J'attache aussi de l'importance à une communication claire, une livraison rapide et la satisfaction du client. Même en tant que développeur junior, je suis passionné par la création de sites web de haute qualité."
      },
    ],

    // Footer
    allRights: "Tous droits réservés",
    developpedBy: "Développé par Kévin Machado"
  },
  en: {
    // Header
    portfolio: "My Portfolio",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    CV: "CV",
    contact: "Contact me",

    // Hero
    hello: "Hello",
    frontendDev: "Web Developer in Tours",
    heroSubtitle: "Creating dynamic and intuitive web experiences",
    discoverProjects: "Discover my projects",

    // About
    aboutTitle: "About Me",
    aboutText1:
      "My name is <span class='importantHover'>Kevin Machado</span>, and I am a <span class='importantHover'> Developer based in Tours, France</span>. Passionate about creating <span class='importantHover'>modern</span> and <span class='importantHover'>intuitive</span> web interfaces. Specialized in <span class='importantHover'>React</span>, I design and build high-performance websites that turn your ideas into <span class='importantHover'>memorable digital experiences</span>.",

// Projects
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
    project7Title: "Portfolio Lola Gauchy",
    project7Desc:"This project is a portfolio site for a freelance digital marketer. It allowed me to work with Next.js and TailwindCSS to create a modern and responsive website.",
    githubProject:"See the project's GitHub",
    linkProject:"See the project's website",
    gestionDeProjet:"Project management",
    seeMore:"See more",

        // Pricing
    pricingTitle: "Pricing",
    pricingCta: "Choose this plan",

    // Basic
    basicTitle: "Basic",
   
    basicPrice: "€749.99",
    basicSubtitle: "Single-section landing block",
    basicDescription: "A clean, modern and responsive React section built based on your design.",
    basicFeatures: [
      "Functional website",
      "Content upload",
      "Opt-in form",
      "Speed optimization",
      "Hosting setup",
      "Social media icons",
      "1 page",
      "1 plugin/extension",
      "1 product",
      "1 revision"
    ],
    basicDelivery: "Delivery: 3 days",

    // Standard
    standardTitle: "Standard",
    standardBadge: "⭐ Best Seller",
    standardPrice: "€1749.99",
    standardSubtitle: "Full landing page (3–5 sections)",
    standardDescription: "Modern React landing page, pixel-perfect and fully responsive.",
    standardFeatures: [
      "Functional website",
      "Content upload",
      "Opt-in form",
      "Speed optimization",
      "Hosting setup",
      "Social media icons",
      "1 page",
      "3 plugins/extensions",
      "1 product",
      "3 revisions"
    ],
    standardDelivery: "Delivery: 7 days",

    // Premium
    premiumTitle: "Premium",
    premiumBadge: "🔥 Recommended",
    premiumPrice: "€3299.99",
    premiumSubtitle: "Landing + Animations + Full SEO",
    premiumDescription: "Premium landing page with animations, advanced SEO and top performance.",
    premiumFeatures: [
      "Functional website",
      "Content upload",
      "Opt-in form",
      "Speed optimization",
      "Hosting setup",
      "Social media icons",
      "2-3 page",
      "5 plugins/extensions",
      "1 product",
      "Unlimited revisions"
    ],
    premiumDelivery: "Delivery: 14 days",

    //FAQ

    faqTitle: "FAQ",
    faq: [
      
      {
        question: "Can you make my landing page responsive?",
        answer:
          "Absolutely! Every landing page I build is fully responsive and works perfectly on mobile, tablet, and desktop."
      },
      
      {
        question: "Do you handle deployment?",
        answer:
          "Yes, I can deploy your landing page on Vercel, Netlify, or your preferred hosting. If you don't need deployment, I will provide a ready-to-use React project."
      },
      {
        question: "Can you add animations or interactive elements?",
        answer:
          "Yes! For Standard and Premium packages, I can include smooth animations with Framer Motion and interactive elements like sliders, buttons, or forms."
      },
      {
        question: "What if I don't have a design ready?",
        answer:
          "If you don't have a design, I can still create a modern landing page following best practices, but having a design speeds up delivery and ensures the page matches your vision."
      },
      {
        question: "Do you optimize the landing page for SEO?",
        answer:
          "Yes! I include basic SEO optimization such as proper HTML structure, meta tags, and efficient React code."
      },
      {
        question: "What sets you apart from other developers?",
        answer:
          "I focus on pixel-perfect designs, responsiveness, and clean React code. I also value clear communication, fast delivery, and client satisfaction. Even as a junior developer, I am passionate about creating high-quality websites."
      },
    ],

    // Contact

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
