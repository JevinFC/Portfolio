import { examples } from "./projects.js";

const example = (key) => examples.find((item) => item.key === key);

export const metiers = [
  {
    slug: "plombier",
    label: "plombier",
    audience: "Plombiers et chauffagistes",
    title: "Site internet pour plombier à Tours · Hachado",
    description:
      "Site internet pour plombier-chauffagiste à Tours : appel en un clic, disponibilité, zone d'intervention et prix affichés. Exemple en ligne, dès 890 €.",
    crumb: "Site internet pour plombier",
    heading: "Un site internet pour plombier à Tours",
    lead: "Quand une fuite arrive, vos clients vous cherchent sur leur téléphone. Votre site doit leur dire en quelques secondes si vous êtes disponible, où vous intervenez et comment vous appeler.",
    needsTitle: "Ce qu'un plombier doit montrer sur son site",
    needs: [
      {
        query: "plombier urgence tours",
        title: "Un bouton pour vous appeler",
        text: "En haut de la page et toujours visible sur téléphone : un client qui a de l'eau par terre ne cherche pas votre numéro.",
      },
      {
        query: "plombier disponible aujourd'hui",
        title: "Votre disponibilité",
        text: "Disponible aujourd'hui, complet ou en congés : le client sait tout de suite s'il doit vous appeler.",
      },
      {
        query: "plombier joué-lès-tours",
        title: "Votre zone d'intervention",
        text: "Les communes où vous vous déplacez autour de Tours, pour éviter les appels de trop loin.",
      },
      {
        query: "prix recherche de fuite",
        title: "Des prix indicatifs",
        text: "Déplacement, recherche de fuite, débouchage : un ordre de prix rassure avant même l'appel.",
      },
      {
        query: "fuite d'eau que faire",
        title: "Le bon geste en attendant",
        text: "Où couper l'eau en cas de fuite : une aide utile, qui montre votre sérieux.",
      },
      {
        query: "avis plombier tours",
        title: "Vos chantiers et vos avis",
        text: "Des photos de vos interventions et ce qu'en disent vos clients.",
      },
    ],
    example: example("raccord"),
    exampleTitle: "L'exemple : Raccord, plombier-chauffagiste",
    exampleText:
      "Raccord est une entreprise fictive et ses photos sont libres de droits. J'ai construit son site pour montrer ce qu'une seule page peut faire pour un plombier. Il est en ligne : ouvrez-le sur votre téléphone.",
    exampleFeatures: [
      "Une jauge en haut de page qui indique si l'artisan est disponible aujourd'hui",
      "La vanne du compteur à fermer en cas de fuite, expliquée en un geste",
      "Les prix des interventions courantes, du débouchage à l'entretien de chaudière",
      "Le délai moyen d'intervention et la zone desservie autour de Tours",
      "Des chantiers et des avis clients",
      "Un bouton d'appel toujours visible sur téléphone",
    ],
    offer: {
      name: "Une page",
      price: "890 €",
      amount: "890",
      delivery: "Livré en 1 semaine",
      text: "Pour un plombier, une page bien faite suffit souvent : vos clients veulent vous appeler, pas lire dix pages. Elle comprend la rédaction des textes, le référencement de base, votre fiche Google et l'hébergement à votre nom.",
      alternative:
        "Vous voulez une page par service, comme le dépannage, le chauffage ou la salle de bains ? Le Site complet, à 1 690 €, vous fait apparaître sur plus de recherches.",
    },
    faq: [
      {
        question: "J'ai déjà une fiche Google. Un site, c'est vraiment utile ?",
        answer:
          "Votre fiche Google fait sonner le téléphone, votre site rassure : vos prix, votre zone, vos chantiers, vos avis. Il vous fait aussi apparaître sur plus de recherches, comme « dépannage plomberie Joué-lès-Tours ». Et la création ou l'optimisation de votre fiche Google est comprise dans chaque formule.",
      },
      {
        question: "Combien coûte un site pour un plombier ?",
        answer:
          "Une page coûte 890 €, livrée en une semaine. Un site complet de 4 à 6 pages, avec une page par service, coûte 1 690 €. L'hébergement est gratuit et à votre nom ; seul le nom de domaine reste à votre charge, environ 10 à 15 € par an.",
      },
      {
        question: "Faut-il afficher mes prix ?",
        answer:
          "Je vous le conseille : des prix indicatifs, du type « à partir de », évitent les appels de simple comparaison et rassurent les clients qui ont une urgence. Vous décidez de ce qui s'affiche.",
      },
      {
        question: "En combien de temps mon site peut-il être en ligne ?",
        answer:
          "Une semaine pour une page, à partir du moment où vous m'avez transmis vos informations : coordonnées, zone, prix et quelques photos de vos chantiers.",
      },
    ],
    ctaTitle: "Vous êtes plombier à Tours ou dans l'agglomération ?",
    ctaText: "Dites-moi comment vous travaillez : je vous montre à quoi ressemblerait votre site, sans engagement.",
  },
  {
    slug: "paysagiste",
    label: "paysagiste",
    audience: "Paysagistes",
    title: "Site internet pour paysagiste à Tours · Hachado",
    description:
      "Site internet pour paysagiste à Tours : photos de jardins avant et après, création et entretien, crédit d'impôt expliqué. Exemple en ligne, 1 690 €.",
    crumb: "Site internet pour paysagiste",
    heading: "Un site internet pour paysagiste à Tours",
    lead: "Un jardin se choisit sur photo. Votre site doit montrer vos réalisations, expliquer ce que vous faites et ce que ça coûte vraiment, crédit d'impôt compris.",
    needsTitle: "Ce qu'un paysagiste doit montrer sur son site",
    needs: [
      {
        query: "paysagiste tours avant après",
        title: "De grandes photos de vos jardins",
        text: "Avant et après, en grand : c'est ce qui décide un client à vous appeler plutôt qu'un autre.",
      },
      {
        query: "entretien jardin tours",
        title: "La création et l'entretien, séparés",
        text: "Ce sont deux métiers et deux clientèles. Une page pour chacun, c'est plus clair pour vos clients comme pour Google.",
      },
      {
        query: "crédit d'impôt jardinage",
        title: "Le crédit d'impôt, chiffré",
        text: "Si vous êtes déclaré en services à la personne, l'entretien ouvre droit à 50 % de crédit d'impôt. Vos clients doivent voir le prix qu'ils paieront vraiment.",
      },
      {
        query: "prix taille de haie",
        title: "Des prix de départ",
        text: "Taille de haie, tonte, création de massif : un ordre de prix évite les demandes qui ne vous correspondent pas.",
      },
      {
        query: "paysagiste saint-cyr-sur-loire",
        title: "Votre zone d'intervention",
        text: "Les communes où vous travaillez autour de Tours, pour que le client sache tout de suite qu'il est chez vous.",
      },
      {
        query: "devis paysagiste",
        title: "Une demande de visite simple",
        text: "Un formulaire court qui vous donne l'essentiel : le type de travaux, la commune, un moyen de vous rappeler.",
      },
    ],
    example: example("charmille"),
    exampleTitle: "L'exemple : Charmille, paysagiste",
    exampleText:
      "Charmille est une entreprise fictive et ses photos sont libres de droits. J'ai construit son site complet pour montrer ce que je fais pour un paysagiste. Il est en ligne : parcourez-le.",
    exampleFeatures: [
      "Des photos de chantier annotées, avant et après",
      "Une page pour la création, une autre pour l'entretien",
      "Un calculateur du crédit d'impôt sur l'entretien",
      "Un calendrier de plantation",
      "La carte de la zone d'intervention",
      "Des réalisations à comparer avant et après, d'un glissement",
    ],
    offer: {
      name: "Site complet",
      price: "1 690 €",
      amount: "1690",
      delivery: "Livré en 2 à 3 semaines",
      text: "Pour un paysagiste, le Site complet est le bon format : 4 à 6 pages, dont une pour la création et une pour l'entretien, une galerie de vos jardins et un formulaire de demande de visite. Les textes, le référencement de base, votre fiche Google et l'hébergement à votre nom sont compris.",
      alternative: "Vous faites surtout de l'entretien ? Une page, à 890 €, peut suffire.",
    },
    faq: [
      {
        question: "Mes clients viennent du bouche-à-oreille. Un site, c'est utile ?",
        answer:
          "Oui : la personne à qui l'on vous recommande vérifie presque toujours sur internet avant d'appeler. Un site avec vos jardins en photo transforme la recommandation en appel.",
      },
      {
        question: "Combien coûte un site pour un paysagiste ?",
        answer:
          "Le Site complet coûte 1 690 € : 4 à 6 pages, les textes, le référencement de base et votre fiche Google. L'hébergement est gratuit et à votre nom ; seul le nom de domaine reste à votre charge, environ 10 à 15 € par an. Une page, à 890 €, suffit si vous faites surtout de l'entretien.",
      },
      {
        question: "Faut-il parler du crédit d'impôt sur mon site ?",
        answer:
          "Si votre entreprise est déclarée en services à la personne, oui : vos clients récupèrent la moitié du prix de l'entretien, dans la limite de 5 000 € de dépenses par an. La création de jardin, les terrasses et l'élagage n'y ouvrent pas droit : le site doit le dire clairement.",
      },
      {
        question: "Je n'ai pas de belles photos de mes chantiers. C'est un problème ?",
        answer:
          "Non. Des photos prises au téléphone suffisent souvent : je les choisis et les recadre avec vous. L'offre Site complet + visibilité comprend en plus une séance photo sur place.",
      },
    ],
    ctaTitle: "Vous êtes paysagiste à Tours ou dans l'agglomération ?",
    ctaText: "Dites-moi comment vous travaillez : je vous montre à quoi ressemblerait votre site, sans engagement.",
  },
];
