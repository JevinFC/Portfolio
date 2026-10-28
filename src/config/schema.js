import { SITE_URL } from "./site.js";

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#kevin-machado`,
  name: "Kévin Machado",
  jobTitle: "Développeur web",
  image: `${SITE_URL}/photoProfil.webp`,
  worksFor: { "@id": `${SITE_URL}/#entreprise` },
  sameAs: ["https://www.linkedin.com/in/kevin-machado-devfront", "https://github.com/JevinFC"],
};

export const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes });

export const breadcrumb = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Accueil", path: "/" }, ...items].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const tradeService = (metier, path) => ({
  "@type": "Service",
  "@id": `${SITE_URL}${path}#service`,
  name: `Création de site internet pour ${metier.label}`,
  serviceType: "Création de site internet",
  url: `${SITE_URL}${path}`,
  provider: { "@id": `${SITE_URL}/#entreprise` },
  areaServed: { "@type": "City", name: "Tours" },
  audience: { "@type": "BusinessAudience", name: metier.audience },
  offers: {
    "@type": "Offer",
    name: metier.offer.name,
    price: metier.offer.amount,
    priceCurrency: "EUR",
  },
});

export const profilePage = (path) => ({
  "@type": "ProfilePage",
  "@id": `${SITE_URL}${path}#page`,
  url: `${SITE_URL}${path}`,
  mainEntity: person,
});

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Hachado",
      alternateName: ["Hachado, création de site internet à Tours", "hachado.fr"],
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#entreprise` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#entreprise`,
      name: "Hachado",
      alternateName: "Kévin Machado, développeur web à Tours",
      description:
        "Hachado crée des sites internet sur mesure pour les commerçants, artisans et indépendants de Tours et de son agglomération : rapides, lisibles sur téléphone et bien référencés.",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      image: `${SITE_URL}/og-image.png`,
      telephone: "+33762537242",
      email: "contact@hachado.fr",
      priceRange: "890 € - 2 490 €",
      currenciesAccepted: "EUR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "69 avenue de l'Europe",
        postalCode: "37100",
        addressLocality: "Tours",
        addressRegion: "Centre-Val de Loire",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Tours" },
        { "@type": "City", name: "Joué-lès-Tours" },
        { "@type": "City", name: "Saint-Cyr-sur-Loire" },
        { "@type": "City", name: "Saint-Pierre-des-Corps" },
        { "@type": "City", name: "Saint-Avertin" },
        { "@type": "City", name: "Chambray-lès-Tours" },
        { "@type": "City", name: "La Riche" },
        { "@type": "City", name: "Fondettes" },
        { "@type": "AdministrativeArea", name: "Indre-et-Loire" },
      ],
      knowsLanguage: ["fr"],
      founder: { "@id": `${SITE_URL}/#kevin-machado` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Création de site internet",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Une page",
            description:
              "Site d'une page avec horaires, coordonnées, photos et textes courts rédigés, référencement de base et fiche Google, livré en 1 semaine.",
            price: "890",
            priceCurrency: "EUR",
            itemOffered: { "@type": "Service", name: "Site internet d'une page" },
          },
          {
            "@type": "Offer",
            name: "Site complet",
            description: "Site de 4 à 6 pages avec formulaire de contact, galerie et textes rédigés, livré en 2 à 3 semaines.",
            price: "1690",
            priceCurrency: "EUR",
            itemOffered: { "@type": "Service", name: "Site internet complet" },
          },
          {
            "@type": "Offer",
            name: "Site complet + visibilité",
            description:
              "Site complet avec référencement local actif, prise de rendez-vous en ligne, séance photo, formation, 3 mois de suivi et 3 mois de maintenance offerts, livré en 3 à 4 semaines.",
            price: "2490",
            priceCurrency: "EUR",
            itemOffered: { "@type": "Service", name: "Site internet complet et référencement local" },
          },
          {
            "@type": "Offer",
            name: "Maintenance",
            description:
              "Gestion de l'hébergement, sauvegardes, surveillance, fiche Google à jour et 3 modifications courtes par mois, sans engagement.",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "49",
              priceCurrency: "EUR",
              unitText: "mois",
            },
            itemOffered: { "@type": "Service", name: "Maintenance de site internet" },
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/hachado_/",
        "https://www.facebook.com/profile.php?id=61595171716254",
        "https://share.google/WAe5riPvwKBIJDLxw",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#kevin-machado`,
      name: "Kévin Machado",
      jobTitle: "Développeur web",
      image: `${SITE_URL}/photoProfil.webp`,
      worksFor: { "@id": `${SITE_URL}/#entreprise` },
      sameAs: ["https://www.linkedin.com/in/kevin-machado-devfront", "https://github.com/JevinFC"],
    },
  ],
};
