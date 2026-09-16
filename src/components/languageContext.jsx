import React, { createContext, useContext, useState } from "react";

const translations = {
  fr: {
    // Header
    portfolio: "Kévin Machado",
    home: "Accueil",
    about: "Qui suis-je",
    projects: "Réalisations",
    navOpen: "Ouvrir le menu",
    navClose: "Fermer le menu",

    // Hero
    heroEyebrow: "Développeur web · Tours",
    heroTitle: "Je crée des sites internet pour les commerçants de Tours.",
    heroText:
      "Un site clair, rapide, trouvable sur Google. Livré rapidement, à partir de 890 €.",
    heroCta: "Demander un devis gratuit",
    heroLink: "Voir mes réalisations",
    heroTrust: "Réponse sous 48 h · Devis sans engagement · Basé à Tours",
    heroShotAlt:
      "Page d'accueil d'un site vitrine réalisé pour un commerce de Tours",

    // About
    aboutHeading: "Qui va faire votre site",
    aboutP1: "Je m'appelle Kévin Machado, développeur web à Tours.",
    aboutP2:
      "Je travaille seul, en micro-entreprise. La personne que vous avez au téléphone est celle qui code votre site, et celle que vous rappellerez dans six mois si quelque chose ne va pas.",
    aboutP3:
      "Votre site est écrit sur mesure, ligne par ligne. Ce n'est pas un modèle repeint aux couleurs de votre enseigne : il est plus rapide, mieux référencé, et il vous appartient vraiment.",
    aboutP4:
      "Pas de jargon ni de réunions inutiles : vous me racontez votre métier, je vous montre une maquette, on ajuste ensemble, je livre. Et comme je suis à Tours, on peut se rencontrer.",
    aboutFact1: "Basé à Tours (37)",
    aboutFact2: "Micro-entreprise, SIRET affiché",
    aboutFact3: "Réponse sous 48 h",
    aboutFact4: "Devis gratuit, sans engagement",
    aboutTech:
      "Sites développés en React et Next.js, sans WordPress ni constructeur de pages.",
    aboutPhotoAlt: "Kévin Machado, développeur web à Tours",

    // Projects
    projectsTitle: "Ils ont désormais un site",
    projectsSubtitle: "Trois réalisations, et une place qui vous attend.",
    projectLink: "Voir le site en ligne",
    projectLolaStatus: "Client",
    projectLolaName: "Lola Gauchy",
    projectLolaRole: "Communication digitale, freelance",
    projectLolaText:
      "Lola n'avait qu'un profil sur les réseaux pour montrer son travail. Elle dispose maintenant d'un portfolio qui lui appartient, qu'elle envoie directement à ses prospects.",
    projectLolaTags: ["Portfolio", "Rédaction", "Mise en ligne"],
    projectLolaAlt: "Page d'accueil du portfolio de Lola Gauchy",
    projectKasaStatus: "Projet d'apprentissage",
    projectKasaName: "Kasa",
    projectKasaRole: "Plateforme de location immobilière",
    projectKasaText:
      "Une application de location construite en React, avec navigation entre les pages et composants réutilisables. Gestion des états de chargement et des pages d'erreur incluse.",
    projectKasaTags: ["React", "Routage", "Responsive"],
    projectKasaAlt: "Page d'accueil de la plateforme de location Kasa",
    projectNinaStatus: "Projet d'apprentissage",
    projectNinaName: "Nina Carducci",
    projectNinaRole: "Photographe",
    projectNinaText:
      "Optimisation complète d'un site de photographe : temps de chargement divisé par trois, images compressées, balises de référencement et données structurées ajoutées.",
    projectNinaTags: ["Référencement", "Performances", "Accessibilité"],
    projectNinaAlt: "Page d'accueil du site de la photographe Nina Carducci",
    projectsCtaPlaceholder: "Votre commerce ici",
    projectsCtaTitle: "La prochaine, c'est peut-être la vôtre",
    projectsCtaText:
      "Dites-moi ce que vous faites, je vous montre à quoi ressemblerait votre site. Sans engagement.",
    projectsCtaButton: "Demander un devis gratuit",

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
    footerLinkedin: "Mon profil LinkedIn",
    footerEmail: "Aller au formulaire de contact",
    footerLegal: "Mentions légales",
    footerCgv: "CGV",
    developpedBy: "Développé par Kévin Machado"
  },
  en: {
    // Header
    portfolio: "Kévin Machado",
    home: "Home",
    about: "About me",
    projects: "Work",
    navOpen: "Open menu",
    navClose: "Close menu",

    // Hero
    heroEyebrow: "Web developer · Tours",
    heroTitle: "I build websites for local businesses in Tours.",
    heroText:
      "A clear, fast website that shows up on Google. Delivered quickly, from €890.",
    heroCta: "Get a free quote",
    heroLink: "See my work",
    heroTrust: "Reply within 48h · No-commitment quote · Based in Tours",
    heroShotAlt:
      "Home page of a showcase website built for a local business in Tours",

    // About
    aboutHeading: "Who will build your website",
    aboutP1: "My name is Kévin Machado, a web developer based in Tours, France.",
    aboutP2:
      "I work alone, as a sole trader. The person you speak to on the phone is the one who builds your website, and the one you'll call back in six months if something goes wrong.",
    aboutP3:
      "Your website is written from scratch, line by line. It isn't a template repainted in your colours: it's faster, ranks better, and it's genuinely yours.",
    aboutP4:
      "No jargon, no pointless meetings: you tell me about your trade, I show you a mockup, we adjust it together, I deliver. And since I'm in Tours, we can meet in person.",
    aboutFact1: "Based in Tours, France",
    aboutFact2: "Registered sole trader",
    aboutFact3: "Reply within 48h",
    aboutFact4: "Free quote, no commitment",
    aboutTech: "Built with React and Next.js — no WordPress, no page builder.",
    aboutPhotoAlt: "Kévin Machado, web developer in Tours, France",

    // Projects
    projectsTitle: "They now have a website",
    projectsSubtitle: "Three projects, and one spot waiting for you.",
    projectLink: "View the live site",
    projectLolaStatus: "Client",
    projectLolaName: "Lola Gauchy",
    projectLolaRole: "Freelance digital communications",
    projectLolaText:
      "Lola only had a social media profile to show her work. She now has a portfolio of her own that she sends straight to prospects.",
    projectLolaTags: ["Portfolio", "Copywriting", "Deployment"],
    projectLolaAlt: "Home page of Lola Gauchy's portfolio",
    projectKasaStatus: "Training project",
    projectKasaName: "Kasa",
    projectKasaRole: "Property rental platform",
    projectKasaText:
      "A rental application built with React, with page routing and reusable components. Includes loading states and error pages.",
    projectKasaTags: ["React", "Routing", "Responsive"],
    projectKasaAlt: "Home page of the Kasa rental platform",
    projectNinaStatus: "Training project",
    projectNinaName: "Nina Carducci",
    projectNinaRole: "Photographer",
    projectNinaText:
      "Full optimisation of a photographer's website: load time cut by three, compressed images, SEO tags and structured data added.",
    projectNinaTags: ["SEO", "Performance", "Accessibility"],
    projectNinaAlt: "Home page of photographer Nina Carducci's website",
    projectsCtaPlaceholder: "Your business here",
    projectsCtaTitle: "The next one could be yours",
    projectsCtaText:
      "Tell me what you do and I'll show you what your website could look like. No commitment.",
    projectsCtaButton: "Get a free quote",

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

    footerLinkedin: "My LinkedIn profile",
    footerEmail: "Go to the contact form",
    footerLegal: "Legal notice",
    footerCgv: "Terms of sale",
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
