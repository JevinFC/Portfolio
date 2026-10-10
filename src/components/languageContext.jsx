import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  fr: {
    // Header
    home: "Accueil",
    about: "Qui suis-je",
    projects: "Réalisations",
    navOpen: "Ouvrir le menu",
    navClose: "Fermer le menu",
    langSwitch: "Passer en anglais",

    // Hero
    heroEyebrow: "Création de site internet à Tours",
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
      "J'en ai fait ma façon de travailler : couper tout ce qui ne vous sert pas, et tailler un site sur mesure pour votre commerce. Une hache à double tranchant, ce sont deux promesses : un site simple pour vous, et efficace pour Google. C'est de là que vient Hachado, le nom de mon activité.",
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
    projectsCtaPlaceholder: "Votre commerce ici",
    projectsCtaTitle: "La prochaine, c'est peut-être la vôtre",
    projectsCtaText:
      "Dites-moi ce que vous faites, je vous montre à quoi ressemblerait votre site. Sans engagement.",
    projectsCtaButton: "Demander un devis gratuit",

    // Tarifs
    pricingTitle: "Tarifs",
    pricingSubtitle:
      "Pas de frais cachés : chaque offre comprend le référencement de base, votre fiche Google et l'hébergement gratuit à votre nom.",
    pricingIncluded: "Ce qui est inclus",
    pricingCta: "Demander un devis",
    pricingNotes: [
      "Hébergement gratuit, à votre nom",
      "Paiement en 3 fois sans frais",
      "Maintenance facultative : 49 €/mois, sans engagement",
      "Prix nets, TVA non applicable (art. 293 B du CGI)",
    ],
    pricingBaseTitle: "Inclus dans toutes les offres",
    pricingStampLabel: "Frais cachés",
    pricingStampValue: "0 €",
    pricingBase: [
      { lead: "Un site sur mesure", rest: ", rapide et parfait sur téléphone" },
      { lead: "Le référencement de base", rest: " : textes, titres et réglages pensés pour être trouvé dans votre ville" },
      { lead: "Votre fiche Google", rest: " créée ou optimisée" },
      { lead: "L'hébergement gratuit", rest: ", à votre nom" },
      { lead: "La mise en ligne", rest: " et le branchement de votre nom de domaine" },
      { lead: "Les pages légales", rest: " et des statistiques de visite sans cookies" },
      { lead: "Une garantie de 3 mois", rest: " sur le bon fonctionnement du site" },
    ],
    pricingGoodKicker: "À garder sous le coude",
    pricingGoodTitle: "Bon à savoir",
    pricingGood: [
      {
        figure: "10–15 €",
        unit: "par an",
        label: "Nom de domaine",
        text: " à votre nom, réglé directement par vous. Je vous aide gratuitement à l'acheter.",
      },
      {
        figure: "49 €",
        unit: "par mois",
        label: "Maintenance",
        text: " facultative et sans engagement : gestion de l'hébergement, sauvegardes, surveillance, fiche Google à jour et 3 modifications courtes par mois.",
      },
      {
        figure: "40 €",
        unit: "de l'heure",
        label: "En dehors de la maintenance",
        text: ", facturés par demi-heure. Devis préalable au-delà de 2 h.",
      },
      {
        figure: "3×",
        unit: "sans frais",
        label: "Paiement",
        text: " échelonné si vous le souhaitez. Prix nets, TVA non applicable (art. 293 B du CGI).",
      },
    ],

    // Basic
    basicTitle: "Une page",
    basicPrice: "890 €",
    basicSubtitle: "L'essentiel pour exister sur Google et être joignable.",
    basicFeatures: [
      "Une page unique, tout y est",
      "Vos horaires, coordonnées et photos",
      "Un bouton pour vous appeler, un autre pour venir chez vous",
      "Des textes courts rédigés à partir de vos informations",
    ],
    basicDelivery: "Livré en 1 semaine",

    // Standard
    standardTitle: "Site complet",
    standardBadge: "Le plus adapté aux commerces",
    standardPrice: "1 690 €",
    standardSubtitle: "Un vrai site pour présenter votre activité en détail.",
    standardFeatures: [
      "Tout ce qui est inclus dans « Une page »",
      "4 à 6 pages, dont une par service principal",
      "Un formulaire pour recevoir vos demandes",
      "Galerie photos, menu ou catalogue (sans vente en ligne)",
      "Vos textes rédigés à partir de ce que vous me dites",
      "Plus de pages, donc plus de recherches où vous apparaissez",
    ],
    standardDelivery: "Livré en 2 à 3 semaines",

    // Premium
    premiumTitle: "Site complet + visibilité",
    premiumPrice: "2 490 €",
    premiumSubtitle: "Pour aller chercher activement les clients de votre ville.",
    premiumFeatures: [
      "Tout ce qui est inclus dans « Site complet »",
      "Référencement local actif : mots-clés de votre métier, annuaires, avis clients",
      "Prise de rendez-vous en ligne",
      "Séance photo sur place : 10 à 15 photos retouchées",
      "Une heure de formation à votre fiche Google et à vos outils",
      "3 mois de suivi : un bilan par mois et des ajustements",
      "3 mois de maintenance offerts",
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
        question: "Combien coûte la création d'un site internet ?",
        answer:
          "Un site d'une page coûte 890 €, un site complet de 4 à 6 pages 1 690 €, et l'offre Site complet + visibilité 2 490 €. Les prix sont fixes (TVA non applicable), payables en 3 fois sans frais, et comprennent la mise en ligne et l'hébergement, gratuit et à votre nom. Seul le nom de domaine reste à votre charge, environ 10 à 15 € par an. La maintenance à 49 € par mois est facultative et sans engagement."
      },
      {
        question: "Combien de temps avant que mon site soit en ligne ?",
        answer:
          "Une semaine pour une page unique, deux à trois semaines pour un site complet, trois à quatre semaines avec l'offre visibilité. Le délai démarre quand vous m'avez transmis vos informations : horaires, coordonnées, photos et tout ce qui doit figurer sur le site."
      },
      {
        question: "Je n'ai ni photos ni textes prêts. C'est un problème ?",
        answer:
          "Non. Dans toutes les offres, je rédige les textes à partir de ce que vous me dites. L'offre Site complet + visibilité comprend en plus une séance photo dans votre établissement, avec 10 à 15 photos retouchées. Si vous avez déjà des photos, je les utilise."
      },
      {
        question: "Est-ce que mes clients me trouveront sur Google ?",
        answer:
          "C'est tout l'objectif. Chaque offre comprend le référencement de base et la création ou l'optimisation de votre fiche Google, celle qui affiche vos horaires, votre adresse et vos avis. Le site complet multiplie les pages, donc les recherches où vous apparaissez, et l'offre visibilité va chercher activement les clients de votre ville : mots-clés de votre métier, annuaires, avis clients et trois mois de suivi."
      },
      {
        question: "Pourrai-je modifier mon site moi-même ?",
        answer:
          "Vos horaires exceptionnels et vos actualités se gèrent depuis votre fiche Google, qui reste entre vos mains : l'offre visibilité comprend une heure de formation pour le faire vous-même. Pour le site, je m'en charge : trois modifications courtes par mois sont comprises dans la maintenance, sinon c'est 40 € de l'heure, facturés par demi-heure."
      },
      {
        question: "Que comprend la maintenance à 49 € par mois ?",
        answer:
          "La gestion de l'hébergement, le suivi du renouvellement de votre nom de domaine, les sauvegardes, la surveillance du site, la mise à jour de votre fiche Google et trois modifications courtes par mois (horaires, tarifs, photos, textes courts), faites sous 48 h ouvrées. Elle est facultative, sans engagement, et offerte les trois premiers mois avec l'offre visibilité."
      },
      {
        question: "Mon site m'appartient-il ?",
        answer:
          "Oui. Le nom de domaine, l'hébergement et les comptes liés au site (statistiques, formulaire, fiche Google) sont à votre nom dès le départ, et les droits sur le site vous sont cédés une fois celui-ci réglé. Sans maintenance, il reste en ligne, et je vous remets ses fichiers sur simple demande."
      },
      {
        question: "Comment ça se passe une fois le devis accepté ?",
        answer:
          "On fait le point sur ce que vous voulez, vous me transmettez vos informations, je vous montre une première version que l'on ajuste ensemble, puis je mets le site en ligne. Le devis est gratuit. Vous réglez ensuite 30 % à la commande et le solde à la livraison, ou en trois fois sans frais."
      },
      {
        question: "Vous travaillez seulement avec des commerces de Tours ?",
        answer:
          "Je suis basé à Tours et je travaille avec les commerçants, artisans et indépendants de toute l'agglomération : Joué-lès-Tours, Saint-Cyr-sur-Loire, Saint-Pierre-des-Corps, Saint-Avertin, Chambray-lès-Tours, La Riche, Fondettes et ailleurs en Indre-et-Loire. On peut se rencontrer, et tout peut aussi se faire à distance, en visio. Au-delà de l'agglomération, pour la séance photo de l'offre visibilité, je me déplace pour 0,60 € du kilomètre (aller-retour depuis Tours), ou je retouche vos propres photos et l'offre baisse de 150 €."
      },
    ],

    // Footer
    footerLinkedin: "Mon profil LinkedIn",
    footerInstagram: "Mon compte Instagram",
    footerEmail: "Aller au formulaire de contact",
    footerLegal: "Mentions légales",
    footerCgv: "CGV",
    footerPrivacy: "Confidentialité",
    footerMade: "Taillé à Tours.",
    footerCopyright: "© {year} · Hachado · Kévin Machado"
  },
  en: {
    // Header
    home: "Home",
    about: "About me",
    projects: "Work",
    navOpen: "Open menu",
    navClose: "Close menu",
    langSwitch: "Switch to French",

    // Hero
    heroEyebrow: "Website design in Tours",
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
      "I made it my way of working: cutting everything you don't need, and shaping a website that fits your business. A double-bit axe carries two promises: a site that's simple for you, and effective on Google. That's where the name Hachado comes from.",
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
    projectsCtaPlaceholder: "Your business here",
    projectsCtaTitle: "The next one could be yours",
    projectsCtaText:
      "Tell me what you do and I'll show you what your website could look like. No commitment.",
    projectsCtaButton: "Get a free quote",

        // Pricing
    pricingTitle: "Pricing",
    pricingSubtitle:
      "No hidden fees: every plan includes core SEO, your Google profile and free hosting in your name.",
    pricingIncluded: "What's included",
    pricingCta: "Request a quote",
    pricingNotes: [
      "Free hosting, in your name",
      "Pay in 3 instalments, no fees",
      "Optional maintenance: €49/month, no commitment",
      "Net prices, VAT not applicable",
    ],
    pricingBaseTitle: "Included in every plan",
    pricingStampLabel: "Hidden fees",
    pricingStampValue: "€0",
    pricingBase: [
      { lead: "A custom website", rest: ", fast and perfect on mobile" },
      { lead: "Core SEO", rest: ": copy, titles and settings designed to be found in your town" },
      { lead: "Your Google Business Profile", rest: " created or optimised" },
      { lead: "Free hosting", rest: ", in your name" },
      { lead: "Launch", rest: " and connection of your domain name" },
      { lead: "Legal pages", rest: " and cookie-free visitor statistics" },
      { lead: "A 3-month guarantee", rest: " that the site works properly" },
    ],
    pricingGoodKicker: "Keep this handy",
    pricingGoodTitle: "Good to know",
    pricingGood: [
      {
        figure: "€10–15",
        unit: "a year",
        label: "Domain name",
        text: " in your name, paid directly by you. I'll help you buy it at no charge.",
      },
      {
        figure: "€49",
        unit: "a month",
        label: "Maintenance",
        text: ", optional and with no commitment: hosting management, backups, monitoring, an up-to-date Google profile and 3 short changes a month.",
      },
      {
        figure: "€40",
        unit: "an hour",
        label: "Outside maintenance",
        text: ", billed by the half hour. Quote first for anything over 2 hours.",
      },
      {
        figure: "3×",
        unit: "no fees",
        label: "Payment",
        text: " in instalments if you wish. Net prices, VAT not applicable.",
      },
    ],

    // Basic
    basicTitle: "One page",
    basicPrice: "€890",
    basicSubtitle: "The essentials to show up on Google and be reachable.",
    basicFeatures: [
      "A single page, everything on it",
      "Your hours, contact details and photos",
      "One button to call you, one to find you",
      "Short copy written from your information",
    ],
    basicDelivery: "Delivered in 1 week",

    // Standard
    standardTitle: "Full website",
    standardBadge: "Best fit for local businesses",
    standardPrice: "€1,690",
    standardSubtitle: "A real website to present your business in full.",
    standardFeatures: [
      "Everything included in “One page”",
      "4 to 6 pages, including one per main service",
      "A form to receive your enquiries",
      "Photo gallery, menu or catalogue (no online sales)",
      "Your text written from what you tell me",
      "More pages, so more searches where you show up",
    ],
    standardDelivery: "Delivered in 2 to 3 weeks",

    // Premium
    premiumTitle: "Full website + visibility",
    premiumPrice: "€2,490",
    premiumSubtitle: "To actively win over customers in your town.",
    premiumFeatures: [
      "Everything included in “Full website”",
      "Active local SEO: your trade's keywords, directories, customer reviews",
      "Online booking",
      "On-site photo session: 10 to 15 edited photos",
      "One hour of training on your Google profile and tools",
      "3 months of follow-up: a monthly report and adjustments",
      "3 months of maintenance included",
    ],
    premiumDelivery: "Delivered in 3 to 4 weeks",

    //FAQ

    faqTitle: "FAQ",
    faq: [
      {
        question: "How much does a website cost?",
        answer:
          "A one-page site costs €890, a full 4 to 6 page website €1,690, and the Full website + visibility plan €2,490. Prices are fixed (no VAT applicable), can be paid in 3 instalments at no extra cost, and include going live and hosting, free and in your name. The only extra is your domain name, about €10 to €15 a year. Maintenance at €49 per month is optional, with no commitment."
      },
      {
        question: "How long before my website is live?",
        answer:
          "One week for a single page, two to three weeks for a full website, three to four weeks with the visibility plan. The clock starts once you have sent me your information: opening hours, contact details, photos and anything else the site needs to show."
      },
      {
        question: "I don't have photos or written content ready. Is that a problem?",
        answer:
          "No. On every plan, I write the content from what you tell me. The Full website + visibility plan also includes a photo session at your premises, with 10 to 15 edited photos. If you already have photos, I will use them."
      },
      {
        question: "Will my customers find me on Google?",
        answer:
          "That is the whole point. Every plan includes core SEO and setting up or optimising your Google Business Profile, the listing showing your hours, address and reviews. A full website adds pages, so more searches where you show up, and the visibility plan actively goes after customers in your town: your trade's keywords, directories, customer reviews and three months of follow-up."
      },
      {
        question: "Will I be able to update the site myself?",
        answer:
          "Special opening hours and news are managed from your Google profile, which stays in your hands: the visibility plan includes an hour of training so you can do it yourself. As for the site, I take care of it: three short changes a month are included in maintenance, otherwise it's €40 per hour, billed by the half hour."
      },
      {
        question: "What does the €49/month maintenance cover?",
        answer:
          "Hosting management, keeping track of your domain renewal, backups, monitoring, keeping your Google profile up to date and three short changes a month (hours, prices, photos, short text), done within 2 working days. It is optional, with no commitment, and included for the first three months with the visibility plan."
      },
      {
        question: "Will I own my website?",
        answer:
          "Yes. The domain name, hosting and accounts linked to the site (statistics, form, Google profile) are in your name from day one, and the rights to the site are transferred to you once it is paid for. Without maintenance it stays online, and I will hand over its files whenever you ask."
      },
      {
        question: "What happens once the quote is accepted?",
        answer:
          "We go over what you need, you send me your information, I show you a first version that we adjust together, then I put the site live. The quote is free. You then pay 30% when you order and the rest on delivery, or in three instalments at no extra cost."
      },
      {
        question: "Do you only work with businesses in Tours?",
        answer:
          "I'm based in Tours and work with shop owners, craftspeople and freelancers across the whole area: Joué-lès-Tours, Saint-Cyr-sur-Loire, Saint-Pierre-des-Corps, Saint-Avertin, Chambray-lès-Tours, La Riche, Fondettes and elsewhere in Indre-et-Loire. We can meet in person, and everything can also be done remotely by video call. Beyond the Tours area, for the visibility plan's photo session, I can travel at €0.60 per kilometre (round trip from Tours), or edit your own photos and take €150 off the plan."
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
    footerInstagram: "My Instagram account",
    footerEmail: "Go to the contact form",
    footerLegal: "Legal notice",
    footerCgv: "Terms of sale",
    footerPrivacy: "Privacy",
    footerMade: "Hand-cut in Tours.",
    footerCopyright: "© {year} · Hachado · Kévin Machado"
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
