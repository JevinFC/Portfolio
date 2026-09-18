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
    langSwitch: "Passer en anglais",

    // Hero
    heroEyebrow: "Développeur web · Tours",
    heroTitle: "Des sites taillés sur mesure pour les commerçants de Tours.",
    heroText:
      "On coupe le superflu, on garde ce qui fait venir des clients. Livré rapidement, à partir de 890 €.",
    heroCta: "Demander un devis gratuit",
    heroLink: "Voir mes réalisations",
    heroTrust: "Réponse sous 48 h · Devis sans engagement · Basé à Tours",

    // About
    aboutHeading: "Qui va faire votre site",
    aboutSubtitle: "Machado, ça veut dire « hache » en portugais.",
    aboutP1: "Je m'appelle Kévin Machado, développeur web à Tours.",
    aboutP2:
      "Je travaille seul, en micro-entreprise. La personne que vous avez au téléphone est celle qui code votre site, et celle que vous rappellerez dans six mois si quelque chose ne va pas.",
    aboutP3:
      "Votre site est écrit sur mesure, ligne par ligne. Ce n'est pas un modèle repeint aux couleurs de votre enseigne : il est plus rapide, mieux référencé, et il vous appartient vraiment.",
    aboutP4:
      "Pas de jargon ni de réunions inutiles : vous me racontez votre métier, je vous montre une maquette, on ajuste ensemble, je livre. Et comme je suis à Tours, on peut se rencontrer.",
    aboutP5:
      "J'en ai fait ma façon de travailler : couper tout ce qui ne vous sert pas, et tailler un site sur mesure pour votre commerce. Une hache à double tranchant, ce sont deux promesses : un site simple pour vous, et efficace pour Google.",
    aboutFact1: "Basé à Tours (37)",
    aboutFact2: "Micro-entreprise, SIRET affiché",
    aboutFact3: "Réponse sous 48 h",
    aboutFact4: "Devis gratuit, sans engagement",
    aboutTech:
      "Aucun modèle tout fait, aucun montage automatique : tout est écrit à la main.",
    aboutPhotoAlt: "Kévin Machado, développeur web à Tours",

    // Projects
    projectsTitle: "Ils ont désormais un site",
    projectsSubtitle: "Des sites taillés pour des commerces bien réels.",
    projectLink: "Voir le site en ligne",
    projectLolaStatus: "Client",
    projectLolaName: "Lola Gauchy",
    projectLolaRole: "Communication digitale, freelance",
    projectLolaText:
      "Lola n'avait qu'un profil sur les réseaux pour montrer son travail. Elle dispose maintenant d'un site qui lui appartient, qu'elle envoie directement à ses prospects.",
    projectLolaTags: ["Présenter son travail", "Textes rédigés", "Mis en ligne"],
    projectLolaAlt: "Page d'accueil du portfolio de Lola Gauchy",
    projectKasaStatus: "Projet d'apprentissage",
    projectKasaName: "Kasa",
    projectKasaRole: "Plateforme de location immobilière",
    projectKasaText:
      "Un site de location où l'on cherche un logement, ouvre une annonce et consulte les photos sans jamais se perdre.",
    projectKasaTags: ["Navigation simple", "Lisible sur mobile", "Pages d'annonces"],
    projectKasaAlt: "Page d'accueil de la plateforme de location Kasa",
    projectNinaStatus: "Projet d'apprentissage",
    projectNinaName: "Nina Carducci",
    projectNinaRole: "Photographe",
    projectNinaText:
      "Le site d'une photographe remis d'aplomb : il s'affiche trois fois plus vite et ressort mieux dans les résultats Google.",
    projectNinaTags: ["Chargement rapide", "Trouvé sur Google", "Lisible par tous"],
    projectNinaAlt: "Page d'accueil du site de la photographe Nina Carducci",
    projectsCtaPlaceholder: "Votre commerce ici",
    projectsCtaTitle: "La prochaine, c'est peut-être la vôtre",
    projectsCtaText:
      "Dites-moi ce que vous faites, je vous montre à quoi ressemblerait votre site. Sans engagement.",
    projectsCtaButton: "Demander un devis gratuit",

    // Tarifs
    pricingTitle: "Tarifs",
    pricingSubtitle:
      "Pas de frais cachés, pas d'options inutiles. Vous savez exactement ce que vous payez.",
    pricingIncluded: "Ce qui est inclus",
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
      "Un bouton pour vous appeler, un autre pour venir chez vous",
      "S'affiche parfaitement sur téléphone",
      "Mis en ligne et hébergé, je m'occupe de tout",
      "Votre fiche Google créée : horaires, adresse, avis",
    ],
    basicDelivery: "Livré en 1 semaine",

    // Standard
    standardTitle: "Site complet",
    standardBadge: "Le plus adapté aux commerces",
    standardPrice: "1 690 €",
    standardSubtitle: "Un vrai site pour présenter votre activité en détail.",
    standardFeatures: [
      "Tout ce qui est inclus dans « Une page »",
      "4 à 6 pages",
      "Un formulaire pour recevoir vos demandes",
      "Galerie photos, menu ou catalogue",
      "Vos textes rédigés à partir de ce que vous me dites",
      "Pensé pour être trouvé sur Google à Tours",
    ],
    standardDelivery: "Livré en 2 à 3 semaines",

    // Premium
    premiumTitle: "Site complet + visibilité",
    premiumPrice: "2 490 €",
    premiumSubtitle: "Pour être trouvé avant vos concurrents dans votre ville.",
    premiumFeatures: [
      "Tout ce qui est inclus dans « Site complet »",
      "Un travail poussé pour ressortir sur les recherches de votre ville",
      "Prise de rendez-vous en ligne",
      "Séance photo de votre établissement",
      "Une heure de formation pour modifier votre site vous-même",
      "Suivi pendant 3 mois après la mise en ligne",
    ],
    premiumDelivery: "Livré en 3 à 4 semaines",

    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Réponse sous 48 h, devis sans engagement.",
    labelName: "Votre nom",
    labelEmail: "Votre e-mail",
    labelMessage: "Votre message",
    yourName: "Prénom et nom",
    yourEmail: "Pour que je puisse vous répondre",
    yourMessage: "Dites-moi ce que vous faites et ce dont vous avez besoin.",
    sendMessage: "Envoyer le message",
    messageSent: "C'est envoyé. Je vous réponds sous 48 h.",
    messageError:
      "L'envoi n'a pas fonctionné. Écrivez-moi directement à contact@kevinmachado.dev.",

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
    footerMade: "Taillé à Tours.",
    footerCopyright: "© {year} · Kévin Machado"
  },
  en: {
    // Header
    portfolio: "Kévin Machado",
    home: "Home",
    about: "About me",
    projects: "Work",
    navOpen: "Open menu",
    navClose: "Close menu",
    langSwitch: "Switch to French",

    // Hero
    heroEyebrow: "Web developer · Tours",
    heroTitle: "Websites cut to measure for local shops in Tours.",
    heroText:
      "We cut the fluff and keep what brings customers in. Delivered fast, from €890.",
    heroCta: "Get a free quote",
    heroLink: "See my work",
    heroTrust: "Reply within 48 hours · No-obligation quote · Based in Tours",

    // About
    aboutHeading: "Who will build your website",
    aboutSubtitle: "Machado means “axe” in Portuguese.",
    aboutP1: "My name is Kévin Machado, a web developer based in Tours, France.",
    aboutP2:
      "I work alone, as a sole trader. The person you speak to on the phone is the one who builds your website, and the one you'll call back in six months if something goes wrong.",
    aboutP3:
      "Your website is written from scratch, line by line. It isn't a template repainted in your colours: it's faster, ranks better, and it's genuinely yours.",
    aboutP4:
      "No jargon, no pointless meetings: you tell me about your trade, I show you a mockup, we adjust it together, I deliver. And since I'm in Tours, we can meet in person.",
    aboutP5:
      "I made it my way of working: cutting everything you don't need, and shaping a website that fits your business. A double-bit axe carries two promises: a site that's simple for you, and effective on Google.",
    aboutFact1: "Based in Tours, France",
    aboutFact2: "Registered sole trader",
    aboutFact3: "Reply within 48 hours",
    aboutFact4: "Free quote, no commitment",
    aboutTech:
      "No off-the-shelf template, no automated assembly: everything is written by hand.",
    aboutPhotoAlt: "Kévin Machado, web developer in Tours, France",

    // Projects
    projectsTitle: "They now have a website",
    projectsSubtitle: "Websites cut for real local businesses.",
    projectLink: "View the live site",
    projectLolaStatus: "Client",
    projectLolaName: "Lola Gauchy",
    projectLolaRole: "Freelance digital communications",
    projectLolaText:
      "Lola only had a social media profile to show her work. She now has a site of her own that she sends straight to prospects.",
    projectLolaTags: ["Showing her work", "Written content", "Put online"],
    projectLolaAlt: "Home page of Lola Gauchy's portfolio",
    projectKasaStatus: "Training project",
    projectKasaName: "Kasa",
    projectKasaRole: "Property rental platform",
    projectKasaText:
      "A rental site where you look for a place, open a listing and browse the photos without ever getting lost.",
    projectKasaTags: ["Simple navigation", "Readable on mobile", "Listing pages"],
    projectKasaAlt: "Home page of the Kasa rental platform",
    projectNinaStatus: "Training project",
    projectNinaName: "Nina Carducci",
    projectNinaRole: "Photographer",
    projectNinaText:
      "A photographer's website put back in shape: it loads three times faster and shows up better in Google results.",
    projectNinaTags: ["Fast loading", "Found on Google", "Readable by everyone"],
    projectNinaAlt: "Home page of photographer Nina Carducci's website",
    projectsCtaPlaceholder: "Your business here",
    projectsCtaTitle: "The next one could be yours",
    projectsCtaText:
      "Tell me what you do and I'll show you what your website could look like. No commitment.",
    projectsCtaButton: "Get a free quote",

        // Pricing
    pricingTitle: "Pricing",
    pricingSubtitle:
      "No hidden fees, no useless extras. You know exactly what you pay for.",
    pricingIncluded: "What's included",
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
      "One button to call you, one to find you",
      "Looks perfect on a phone",
      "Put online and hosted, I handle all of it",
      "Your Google listing created: hours, address, reviews",
    ],
    basicDelivery: "Delivered in 1 week",

    // Standard
    standardTitle: "Full website",
    standardBadge: "Best fit for local businesses",
    standardPrice: "€1,690",
    standardSubtitle: "A real website to present your business in full.",
    standardFeatures: [
      "Everything included in “One page”",
      "4 to 6 pages",
      "A form to receive your enquiries",
      "Photo gallery, menu or catalogue",
      "Your text written from what you tell me",
      "Built to be found on Google in Tours",
    ],
    standardDelivery: "Delivered in 2 to 3 weeks",

    // Premium
    premiumTitle: "Full website + visibility",
    premiumPrice: "€2,490",
    premiumSubtitle: "To be found ahead of your competitors locally.",
    premiumFeatures: [
      "Everything included in “Full website”",
      "Deeper work to stand out in searches made in your town",
      "Online booking",
      "Photo session at your premises",
      "One hour of training to edit the site yourself",
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
    contactSubtitle: "Reply within 48 hours, no-obligation quote.",
    labelName: "Your name",
    labelEmail: "Your email",
    labelMessage: "Your message",
    yourName: "First and last name",
    yourEmail: "So I can get back to you",
    yourMessage: "Tell me what you do and what you need.",
    sendMessage: "Send message",
    messageSent: "Sent! I'll get back to you within 48 hours.",
    messageError:
      "The message didn't go through. Write to me directly at contact@kevinmachado.dev.",

    footerLinkedin: "My LinkedIn profile",
    footerEmail: "Go to the contact form",
    footerLegal: "Legal notice",
    footerCgv: "Terms of sale",
    footerMade: "Hand-cut in Tours.",
    footerCopyright: "© {year} · Kévin Machado"
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
