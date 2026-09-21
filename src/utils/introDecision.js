// Ces regles doivent rester synchronisees avec le script inline du <head> de index.html,
// qui applique exactement la meme logique avant le premier rendu pour decider s'il pose la
// classe intro-pending. Toute modification ici doit etre reportee la-bas, et inversement :
// si les deux divergent, le calque rose est peint pour une intro qui ne se joue jamais.

const MOBILE_QUERY = "(max-width: 768px), (pointer: coarse)";
const SLOW_TYPES = ["slow-2g", "2g", "3g"];

export const isMobile = () => window.matchMedia(MOBILE_QUERY).matches;

export function decideIntro() {
  const param = new URLSearchParams(window.location.search).get("intro");
  if (param === "force") return { skip: false, reason: "?intro=force", forced: true };
  if (param === "skip") return { skip: true, reason: "?intro=skip", forced: false };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return { skip: false, reason: "mouvement réduit", forced: false };
  }

  const connection =
    navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  if (connection && connection.saveData === true) {
    return { skip: true, reason: "économie de données", forced: false };
  }

  if (connection && isMobile() && SLOW_TYPES.includes(connection.effectiveType)) {
    return { skip: true, reason: `mobile + ${connection.effectiveType}`, forced: false };
  }

  return { skip: false, reason: "connexion suffisante", forced: false };
}
