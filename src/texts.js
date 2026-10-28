const texts = {
  home: "Accueil",
  about: "Qui suis-je",
  projects: "Réalisations",
  navOpen: "Ouvrir le menu",
  navClose: "Fermer le menu",

  heroEyebrow: "Création de site internet à Tours",
  heroTitle: "Des sites taillés sur mesure pour les commerçants de Tours.",
  heroText:
    "On coupe le superflu, on garde ce qui fait venir des clients. Livré rapidement, à partir de 890 €.",
  heroCta: "Demander un devis gratuit",
  heroLink: "Voir mes réalisations",
  heroTrust: "Réponse sous 48 h · Devis sans engagement · Basé à Tours",

  aboutHeading: "Qui va faire votre site",
  aboutSubtitle: "Machado, ça veut dire « hache » en portugais.",
  aboutP1: "Je m'appelle Kévin Machado, développeur web à Tours.",
  aboutP2:
    "Je travaille seul, en micro-entreprise. La personne que vous avez au téléphone est celle qui code votre site, et celle que vous rappellerez dans six mois si quelque chose ne va pas.",
  aboutMore: "Ma façon de travailler et mes engagements",
  aboutFact1: "Basé à Tours (37)",
  aboutFact2: "Micro-entreprise, SIRET affiché",
  aboutFact3: "Réponse sous 48 h",
  aboutFact4: "Devis gratuit, sans engagement",
  aboutTech: "Aucun modèle tout fait, aucun montage automatique : tout est écrit à la main.",
  aboutPhotoAlt: "Kévin Machado, développeur web à Tours",

  projectsTitle: "Ils ont désormais un site",
  projectsSubtitle: "Des sites taillés pour des commerces bien réels.",
  projectsExamplesTitle: "Et deux exemples pour les artisans",
  projectsExamplesText:
    "Des entreprises fictives, mais de vrais sites, en ligne : ouvrez-les sur votre téléphone pour voir ce que je ferais pour votre métier.",
  projectsAll: "Toutes les réalisations",
  projectsCtaPlaceholder: "Votre commerce ici",
  projectsCtaTitle: "La prochaine, c'est peut-être la vôtre",
  projectsCtaText:
    "Dites-moi ce que vous faites, je vous montre à quoi ressemblerait votre site. Sans engagement.",
  projectsCtaButton: "Demander un devis gratuit",

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
  basicExample: { href: "/site-internet-plombier-tours", label: "Voir un exemple : un site de plombier" },

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
  standardExample: { href: "/site-internet-paysagiste-tours", label: "Voir un exemple : un site de paysagiste" },

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
  messageError: "L'envoi n'a pas fonctionné. Écrivez-moi directement à contact@hachado.fr.",

  faqTitle: "FAQ",
  faq: [
    {
      question: "Combien coûte la création d'un site internet ?",
      answer:
        "Un site d'une page coûte 890 €, un site complet de 4 à 6 pages 1 690 €, et l'offre Site complet + visibilité 2 490 €. Les prix sont fixes (TVA non applicable), payables en 3 fois sans frais, et comprennent la mise en ligne et l'hébergement, gratuit et à votre nom. Seul le nom de domaine reste à votre charge, environ 10 à 15 € par an. La maintenance à 49 € par mois est facultative et sans engagement.",
    },
    {
      question: "Combien de temps avant que mon site soit en ligne ?",
      answer:
        "Une semaine pour une page unique, deux à trois semaines pour un site complet, trois à quatre semaines avec l'offre visibilité. Le délai démarre quand vous m'avez transmis vos informations : horaires, coordonnées, photos et tout ce qui doit figurer sur le site.",
    },
    {
      question: "Je n'ai ni photos ni textes prêts. C'est un problème ?",
      answer:
        "Non. Dans toutes les offres, je rédige les textes à partir de ce que vous me dites. L'offre Site complet + visibilité comprend en plus une séance photo dans votre établissement, avec 10 à 15 photos retouchées. Si vous avez déjà des photos, je les utilise.",
    },
    {
      question: "Est-ce que mes clients me trouveront sur Google ?",
      answer:
        "C'est tout l'objectif. Chaque offre comprend le référencement de base et la création ou l'optimisation de votre fiche Google, celle qui affiche vos horaires, votre adresse et vos avis. Le site complet multiplie les pages, donc les recherches où vous apparaissez, et l'offre visibilité va chercher activement les clients de votre ville : mots-clés de votre métier, annuaires, avis clients et trois mois de suivi.",
    },
    {
      question: "Pourrai-je modifier mon site moi-même ?",
      answer:
        "Vos horaires exceptionnels et vos actualités se gèrent depuis votre fiche Google, qui reste entre vos mains : l'offre visibilité comprend une heure de formation pour le faire vous-même. Pour le site, je m'en charge : trois modifications courtes par mois sont comprises dans la maintenance, sinon c'est 40 € de l'heure, facturés par demi-heure.",
    },
    {
      question: "Que comprend la maintenance à 49 € par mois ?",
      answer:
        "La gestion de l'hébergement, le suivi du renouvellement de votre nom de domaine, les sauvegardes, la surveillance du site, la mise à jour de votre fiche Google et trois modifications courtes par mois (horaires, tarifs, photos, textes courts), faites sous 48 h ouvrées. Elle est facultative, sans engagement, et offerte les trois premiers mois avec l'offre visibilité.",
    },
    {
      question: "Mon site m'appartient-il ?",
      answer:
        "Oui. Le nom de domaine, l'hébergement et les comptes liés au site (statistiques, formulaire, fiche Google) sont à votre nom dès le départ, et les droits sur le site vous sont cédés une fois celui-ci réglé. Sans maintenance, il reste en ligne, et je vous remets ses fichiers sur simple demande.",
    },
    {
      question: "Comment ça se passe une fois le devis accepté ?",
      answer:
        "On fait le point sur ce que vous voulez, vous me transmettez vos informations, je vous montre une première version que l'on ajuste ensemble, puis je mets le site en ligne. Le devis est gratuit. Vous réglez ensuite 30 % à la commande et le solde à la livraison, ou en trois fois sans frais.",
    },
    {
      question: "J'ai déjà un site. Vous pouvez le refaire ?",
      answer:
        "Oui. Je regarde d'abord gratuitement comment il est géré : nom de domaine, e-mails, contrat en cours. Je vous donne ensuite un prix fixe, celui de la formule choisie, plus 150 € pour reprendre l'existant : votre nom de domaine et vos e-mails sont conservés, et les anciennes pages redirigent vers les nouvelles pour que Google s'y retrouve. Si quelque chose sort de l'ordinaire, comme une boutique en ligne ou des boîtes mail à déménager, je vous le dis avant, avec son prix.",
    },
    {
      question: "Pourquoi passer par un freelance plutôt que par une agence ?",
      answer:
        "Avec moi, vous parlez directement à la personne qui fait votre site, du premier appel à la mise en ligne. Pas d'intermédiaire, des prix plus bas qu'en agence et des échanges simples. Pour le site d'un commerce ou d'un artisan, une agence n'apporte souvent rien de plus. Et comme tout est à votre nom, n'importe quel développeur pourrait reprendre votre site web si besoin.",
    },
    {
      question: "Vous travaillez seulement avec des commerces de Tours ?",
      answer:
        "Je suis basé à Tours et je travaille avec les commerçants, artisans et indépendants de toute l'agglomération : Joué-lès-Tours, Saint-Cyr-sur-Loire, Saint-Pierre-des-Corps, Saint-Avertin, Chambray-lès-Tours, La Riche, Fondettes et ailleurs en Indre-et-Loire. On peut se rencontrer, et tout peut aussi se faire à distance, en visio. Au-delà de l'agglomération, pour la séance photo de l'offre visibilité, je me déplace pour 0,60 € du kilomètre (aller-retour depuis Tours), ou je retouche vos propres photos et l'offre baisse de 150 €.",
    },
  ],

  footerLinkedin: "Mon profil LinkedIn",
  footerInstagram: "Mon compte Instagram",
  footerFacebook: "Ma page Facebook",
  footerCookies: "Gérer les cookies",
  footerEmail: "Aller au formulaire de contact",
  footerLegal: "Mentions légales",
  footerCgv: "CGV",
  footerPrivacy: "Confidentialité",
  footerPages: [
    { href: "/realisations", label: "Réalisations" },
    { href: "/qui-suis-je", label: "Qui suis-je" },
    { href: "/site-internet-plombier-tours", label: "Site internet pour plombier" },
    { href: "/site-internet-paysagiste-tours", label: "Site internet pour paysagiste" },
  ],
  footerMade: "Taillé à Tours.",
  footerCopyright: "© {year} · Hachado · Kévin Machado",
};

export const t = (key) => texts[key] ?? key;
