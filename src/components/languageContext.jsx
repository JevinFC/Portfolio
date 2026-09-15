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
    pricingTitle: "Tarifs",
    pricingSubtitle: "Des prix nets, sans surprise. Devis gratuit et sans engagement.",
    pricingCta: "Demander un devis",
    pricingNotes: [
      "Paiement en 3 fois sans frais",
      "Prix nets, TVA non applicable (art. 293 B du CGI)",
      "Maintenance et hébergement : 49 €/mois, sans engagement",
    ],

    // Basic
    basicTitle: "Une page",
    basicPrice: "890 €",
    basicSubtitle: "L'essentiel pour exister sur Google et être joignable.",
    basicFeatures: [
      "Une page unique, tout y est",
      "Vos horaires, coordonnées et photos",
      "Bouton appel et itinéraire",
      "Parfaitement lisible sur mobile",
      "Mise en ligne et hébergement configurés",
      "Fiche Google Business créée",
    ],
    basicDelivery: "Livré en 1 semaine",

    // Standard
    standardTitle: "Site complet",
    standardBadge: "Le plus adapté aux commerces",
    standardPrice: "1 690 €",
    standardSubtitle: "Un vrai site pour présenter votre activité en détail.",
    standardFeatures: [
      "Tout ce qui est inclus dans \"Une page\"",
      "4 à 6 pages",
      "Formulaire de contact",
      "Galerie photos, menu ou catalogue",
      "Rédaction des textes à partir de vos infos",
      "Référencement local de base",
    ],
    standardDelivery: "Livré en 2 à 3 semaines",

    // Premium
    premiumTitle: "Site complet + visibilité",
    premiumPrice: "2 490 €",
    premiumSubtitle: "Pour être trouvé avant vos concurrents dans votre ville.",
    premiumFeatures: [
      "Tout ce qui est inclus dans \"Site complet\"",
      "Référencement local approfondi",
      "Prise de rendez-vous en ligne",
      "Séance photo de votre établissement",
      "Formation 1h pour modifier vous-même",
      "Suivi pendant 3 mois après la mise en ligne",
    ],
    premiumDelivery: "Livré en 3 à 4 semaines",


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
        question: "Combien de temps avant que mon site soit en ligne ?",
        answer:
          "Une semaine pour une page unique, deux à trois semaines pour un site complet. Le délai démarre quand vous m'avez transmis vos informations : horaires, coordonnées, photos et tout ce qui doit figurer sur le site."
      },
      {
        question: "Je n'ai ni photos ni textes prêts. C'est un problème ?",
        answer:
          "Non. À partir de l'offre Site complet, je rédige les textes à partir de vos informations, et l'offre Site complet + visibilité comprend une séance photo dans votre établissement. Si vous avez déjà des visuels, je les utilise."
      },
      {
        question: "Est-ce que mes clients me trouveront sur Google ?",
        answer:
          "C'est tout l'objectif. Chaque offre comprend la création de votre fiche Google, celle qui affiche vos horaires, votre adresse et vos avis. Les offres supérieures vont plus loin pour vous positionner sur les recherches faites dans votre ville."
      },
      {
        question: "Pourrai-je modifier mon site moi-même ?",
        answer:
          "Oui. L'offre Site complet + visibilité comprend une heure de formation pour que vous puissiez changer vos horaires, vos prix ou vos photos sans dépendre de moi. Sur les autres offres, je m'occupe des modifications dans le cadre de la maintenance."
      },
      {
        question: "Que comprend la maintenance à 49 € par mois ?",
        answer:
          "L'hébergement, les mises à jour, les sauvegardes et vos modifications courantes : horaires, tarifs, nouvelles photos. C'est sans engagement, vous pouvez arrêter quand vous le souhaitez."
      },
      {
        question: "Comment ça se passe une fois le devis accepté ?",
        answer:
          "On fait le point sur ce que vous voulez, vous me transmettez vos informations, je vous montre une première version que l'on ajuste ensemble, puis je mets le site en ligne. Le devis est gratuit et vous ne payez rien tant que vous ne l'avez pas validé."
      },
    ],

    // Footer
    developpedBy: "Développé par Kévin Machado"
  },
  en: {
    // Header
    portfolio: "My Portfolio",
    home: "Home",
    about: "About",
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
    pricingSubtitle: "Flat pricing, no surprises. Free quote, no commitment.",
    pricingCta: "Request a quote",
    pricingNotes: [
      "Pay in 3 instalments, no fees",
      "Net prices, VAT not applicable",
      "Maintenance and hosting: €49/month, no commitment",
    ],

    // Basic
    basicTitle: "One page",
    basicPrice: "€890",
    basicSubtitle: "The essentials to show up on Google and be reachable.",
    basicFeatures: [
      "A single page, everything on it",
      "Your hours, contact details and photos",
      "Call and directions buttons",
      "Fully readable on mobile",
      "Deployment and hosting set up",
      "Google Business profile created",
    ],
    basicDelivery: "Delivered in 1 week",

    // Standard
    standardTitle: "Full website",
    standardBadge: "Best fit for local businesses",
    standardPrice: "€1,690",
    standardSubtitle: "A real website to present your business in full.",
    standardFeatures: [
      "Everything in One page",
      "4 to 6 pages",
      "Contact form",
      "Photo gallery, menu or catalogue",
      "Copywriting from your notes",
      "Basic local SEO",
    ],
    standardDelivery: "Delivered in 2 to 3 weeks",

    // Premium
    premiumTitle: "Full website + visibility",
    premiumPrice: "€2,490",
    premiumSubtitle: "To be found ahead of your competitors locally.",
    premiumFeatures: [
      "Everything in Full website",
      "In-depth local SEO",
      "Online booking",
      "Photo session at your premises",
      "1h training to edit it yourself",
      "3 months of follow-up after launch",
    ],
    premiumDelivery: "Delivered in 3 to 4 weeks",

    //FAQ

    faqTitle: "FAQ",
    faq: [
      
      {
        question: "How long before my website is live?",
        answer:
          "One week for a single page, two to three weeks for a full website. The clock starts once you have sent me your information: opening hours, contact details, photos and anything else the site needs to show."
      },
      {
        question: "I don't have photos or written content ready. Is that a problem?",
        answer:
          "No. From the Full website plan onwards I write the content from your notes, and the Full website + visibility plan includes a photo session at your premises. If you already have visuals, I will use them."
      },
      {
        question: "Will my customers find me on Google?",
        answer:
          "That is the whole point. Every plan includes setting up your Google listing, the one showing your hours, address and reviews. The higher plans go further to get you found on searches made in your town."
      },
      {
        question: "Will I be able to update the site myself?",
        answer:
          "Yes. The Full website + visibility plan includes an hour of training so you can change your hours, prices or photos without going through me. On the other plans, I handle updates as part of the maintenance."
      },
      {
        question: "What does the €49/month maintenance cover?",
        answer:
          "Hosting, updates, backups and your everyday changes: hours, prices, new photos. There is no commitment, you can stop whenever you want."
      },
      {
        question: "What happens once the quote is accepted?",
        answer:
          "We go over what you need, you send me your information, I show you a first version that we adjust together, then I put the site live. The quote is free and you pay nothing until you have approved it."
      },
    ],

    // Contact

    contactTitle: "Contact",
    yourName: "Your name",
    yourEmail: "Your email",
    yourMessage: "Your message",
    sendMessage: "Send message",
    messageSent: "Message sent successfully!",

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
