import lola from "../assets/imgprojects/screenshotLola.webp";
import raccord from "../assets/imgprojects/raccord.webp";
import raccordMobile from "../assets/imgprojects/raccord-mobile.webp";
import charmille from "../assets/imgprojects/charmille.webp";
import charmilleMobile from "../assets/imgprojects/charmille-mobile.webp";

export const client = {
  key: "lola",
  kind: "client",
  status: "Client",
  name: "Lola Gauchy",
  role: "Communication digitale, freelance",
  text: "Lola n'avait qu'un profil sur les réseaux pour montrer son travail. Elle dispose maintenant d'un site qui lui appartient, qu'elle envoie directement à ses prospects.",
  tags: ["Présenter son travail", "Textes rédigés", "Mis en ligne"],
  image: { src: lola.src, width: lola.width, height: lola.height, alt: "Page d'accueil du portfolio de Lola Gauchy" },
  links: [{ href: "https://lolagauchy.fr", label: "Voir le site en ligne", external: true }],
};

export const examples = [
  {
    key: "raccord",
    kind: "example",
    status: "Exemple · entreprise fictive",
    name: "Raccord",
    role: "Plombier-chauffagiste à Tours",
    offer: "Une page",
    summary:
      "Ce qu'une seule page peut faire pour un plombier : la disponibilité du jour, les prix des interventions courantes et le geste qui limite les dégâts en cas de fuite.",
    text: "Une entreprise fictive, créée pour montrer ce qu'une seule page peut faire pour un plombier : la disponibilité du jour, les prix des interventions courantes et le geste qui limite les dégâts en cas de fuite.",
    tags: ["Formule Une page", "Prix affichés", "Appel en un clic"],
    image: {
      src: raccord.src,
      width: raccord.width,
      height: raccord.height,
      alt: "Page d'accueil de Raccord, site d'exemple pour un plombier-chauffagiste",
    },
    mobile: {
      src: raccordMobile.src,
      width: raccordMobile.width,
      height: raccordMobile.height,
      alt: "Le site de Raccord sur téléphone",
    },
    demo: "https://plombier.hachado.fr",
    page: "/site-internet-plombier-tours",
    pageLabel: "Ce que je propose aux plombiers",
  },
  {
    key: "charmille",
    kind: "example",
    status: "Exemple · entreprise fictive",
    name: "Charmille",
    role: "Paysagiste à Tours",
    offer: "Site complet",
    summary:
      "Un site complet pour un paysagiste : des photos de chantier annotées, la création et l'entretien sur deux pages, et le crédit d'impôt calculé pour le client.",
    text: "Une entreprise fictive, créée pour montrer un site complet : des photos de chantier annotées, la création et l'entretien sur deux pages, et le crédit d'impôt calculé pour le client.",
    tags: ["Formule Site complet", "Photos annotées", "Crédit d'impôt calculé"],
    image: {
      src: charmille.src,
      width: charmille.width,
      height: charmille.height,
      alt: "Page d'accueil de Charmille, site d'exemple pour un paysagiste",
    },
    mobile: {
      src: charmilleMobile.src,
      width: charmilleMobile.width,
      height: charmilleMobile.height,
      alt: "Le site de Charmille sur téléphone",
    },
    demo: "https://paysagiste.hachado.fr",
    page: "/site-internet-paysagiste-tours",
    pageLabel: "Ce que je propose aux paysagistes",
  },
].map((example) => ({
  ...example,
  links: [
    { href: example.page, label: example.pageLabel },
    { href: example.demo, label: "Voir le site d'exemple", external: true },
  ],
}));
