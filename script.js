/* ================================================================
   CONFIGURATION — tout le contenu se modifie ici.
   Aucun changement HTML/CSS nécessaire pour ajouter un réseau ou un jeu.

   Réseaux et parrainages : liens et conditions fournis par Kprikorn.
   WaxTCG : emplacement réservé ; renseigner url quand le lien sera connu.
   Une carte sans URL reste informative, sans bouton de navigation factice.

   avatar.imageUrl : null = monogramme intégré ; sinon URL ou chemin local.
   icon : nom dans le registre ICONS ; logoUrl : URL ou chemin d’une image.
   accent : couleur hexadécimale #RRGGBB, facultative.
   Un code est prioritaire sur le lien dans le bouton de copie.
   copyValue / copyLabel / copySuccess : copie personnalisée (ex. pseudo).
   conditions : liste optionnelle, affichée dans un volet dépliable natif.
   releaseAt / timeZone : annonce datée, sans activation de lien automatique.
   ================================================================ */
const config = {
  name: "Kprikorn",
  greeting: "Hello, moi c’est",
  avatar: { imageUrl: null, monogram: "K", alt: "Avatar de Kprikorn" },
  bio: "Des cartes, des découvertes et de bons moments. Je partage ici mes réseaux et les univers TCG que j’aime explorer. Installe-toi, tu es au bon endroit.",
  interests: ["Gaming", "TCG & collections", "Découvertes"],
  intro: "Quelques univers à découvrir. La prochaine belle pioche est peut-être ici.",
  note: "De nouveaux univers viendront agrandir la collection. Repasse faire un tour !",
  defaultTheme: "dark",
  socials: [
    { name: "Twitch", handle: "@kprikorn", url: "https://twitch.tv/kprikorn", icon: "twitch", accent: "#bd9bea" },
    { name: "TikTok", handle: "@kprikorn.tv", url: "https://www.tiktok.com/@kprikorn.tv", icon: "tiktok", accent: "#a4d8dd" },
    { name: "Instagram", handle: "@kprikorn777", url: "https://www.instagram.com/kprikorn777", icon: "instagram", accent: "#dfa9c6" }
  ],
  games: [
    {
      title: "WikiMasters", badge: "Trade & guilde", icon: "book", logoUrl: null,
      url: "https://www.wiki-masters.com/", referralUrl: null, code: null,
      copyValue: "Kprikorn", copyLabel: "Copier le pseudo", copySuccess: "Pseudo copié",
      description: "Dispo pour les trades sous le pseudo Kprikorn. Ma guilde KpriCrew vient d’ouvrir : rejoins-nous !",
      accent: "#a9c7ed"
    },
    {
      title: "KyaraGames", badge: "Anime", icon: "sparkles", logoUrl: null,
      url: "https://kyara.games/", referralUrl: "https://kyara.games/?ref=d0627989-87f0-4ae1-ba05-69906d54b3aa", code: null,
      description: "Lie ton Discord et ouvre 20 boosters : nous recevons chacun 3 boosters bonus !",
      accent: "#dbc198"
    },
    {
      title: "Melodexia", badge: "Musique", icon: "music", logoUrl: null,
      url: "https://melodexia.fr/", referralUrl: "https://melodexia.fr/invite/4UQVEN", code: null,
      description: "Après validation : 2 boosters Épique garantis pour toi, et des récompenses par paliers pour moi.",
      conditionsTitle: "Comment valider le parrainage ?",
      conditions: [
        "Confirme ton compte.",
        "Ouvre 25 boosters de ta réserve. Les boosters offerts ne comptent pas.",
        "Termine une partie de blind test, La Série ou Arène.",
        "Joue au moins 2 jours différents.",
        "Rejoue au moins 24 heures après ton inscription."
      ],
      accent: "#c4afe9"
    },
    {
      title: "WaxTCG", badge: "TCG", icon: "cards", logoUrl: null,
      url: null, referralUrl: null, code: null,
      description: "Un nouvel univers TCG arrive dans la collection. Le lien sera ajouté ici à son ouverture.",
      releaseAt: "2026-11-06T20:00:00+01:00", timeZone: "Europe/Paris",
      accent: "#e5b7cd"
    }
  ]
};

/* Icônes SVG intégrées : aucune bibliothèque, police ou requête CDN. */
const ICONS = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  book: '<path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14M6 9h3m-3 4h3m6-4h3m-3 4h3"/>',
  sparkles: '<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Zm7 0v4m-2-2h4"/>',
  music: '<path d="M9 18V6l11-3v13M9 10l11-3"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="17" cy="16" rx="3" ry="3"/>',
  cards: '<rect x="8" y="3" width="12" height="17" rx="2"/><path d="m8 6-4 1a2 2 0 0 0-1.5 2.4l2.3 10a2 2 0 0 0 2.4 1.5L13 20m1-13v7m-3-3.5h6"/>',
  link: '<path d="m10 13 4-4m-6 7-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 0 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 0)"/>',
  twitch: '<path d="M4 3h17v12l-5 5h-5l-3 3v-3H4V3Zm4 0v13h4v3l3-3h3l3-3M11 7v5m5-5v5"/>',
  tiktok: '<path d="M14 3v12.5a4.5 4.5 0 1 1-4-4.47V14a1.5 1.5 0 1 0 1 1.5V3h3Zm0 0c.5 3 2.5 5 6 5v3c-2.5 0-4.5-1-6-2.5"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>'
};

function icon(name, className = "") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  if (className) svg.setAttribute("class", className);
  // Seul le registre SVG local est injecté ; tous les textes utilisent textContent.
  svg.innerHTML = ICONS[name] || ICONS.link;
  return svg;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function validUrl(value, allowLocal = false) {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value, document.baseURI);
    if (url.protocol === "https:" || url.protocol === "http:" || (allowLocal && url.protocol === "file:")) return url.href;
  } catch (_) { /* Une URL incorrecte ne devient jamais un lien actif. */ }
  return null;
}

function externalLink(url, className, label) {
  const link = element("a", className);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${label} (nouvel onglet)`);
  return link;
}

/* La couleur de chaque entrée reste lisible sur le fond clair et sombre. */
const accentNodes = [];
function setAccent(node, hex) {
  const value = /^#[\da-f]{6}$/i.test(hex || "") ? hex : "#c4afe9";
  const rgb = [1, 3, 5].map((start) => parseInt(value.slice(start, start + 2), 16));
  accentNodes.push({ node, rgb });
  updateAccent(node, rgb);
}
function updateAccent(node, rgb) {
  const light = document.documentElement.dataset.theme === "light";
  const adjusted = light ? rgb.map((channel) => Math.round(channel * .53)) : rgb;
  node.style.setProperty("--accent", `rgb(${adjusted.join(", ")})`);
  node.style.setProperty("--accent-rgb", adjusted.join(", "));
}

function renderProfile() {
  document.title = `${config.name} — Mon petit univers`;
  document.querySelector("#profile-name").replaceChildren(document.createTextNode(config.name), element("span", "name-dot", "."));
  document.querySelector("#wordmark-name").textContent = config.name.toLocaleLowerCase("fr");
  document.querySelector(".wordmark").setAttribute("aria-label", `${config.name}, accueil`);
  document.querySelector("#footer-name").textContent = config.name;
  document.querySelector("#greeting").textContent = config.greeting;
  document.querySelector("#bio").textContent = config.bio;
  document.querySelector("#discover-intro").textContent = config.intro;
  document.querySelector("#collection-note").textContent = config.note;
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector("#note-icon").append(icon("cards"));

  const avatar = document.querySelector("#avatar");
  const monogram = element("span", "avatar__monogram", config.avatar.monogram || config.name.slice(0, 1));
  monogram.setAttribute("aria-hidden", "true");
  avatar.setAttribute("role", "img");
  avatar.setAttribute("aria-label", config.avatar.alt);
  avatar.append(monogram, element("span", "avatar__star", "✧"));
  avatar.lastElementChild.setAttribute("aria-hidden", "true");
  const imageUrl = validUrl(config.avatar.imageUrl, true);
  if (imageUrl) {
    const image = element("img");
    image.alt = ""; // Le conteneur porte déjà l’alternative textuelle.
    image.decoding = "async";
    image.width = image.height = 76;
    image.addEventListener("error", () => image.remove(), { once: true });
    image.src = imageUrl;
    avatar.append(image);
  }
  document.querySelector("#interests").replaceChildren(...config.interests.map((interest) => element("li", "", interest)));
}

function renderSocials() {
  const list = document.querySelector("#socials");
  list.replaceChildren();
  config.socials.forEach((social) => {
    const url = validUrl(social.url);
    if (!url) return;
    const item = element("li");
    const link = externalLink(url, "social", `Retrouver ${config.name} sur ${social.name}`);
    const symbol = element("span", "social__icon");
    symbol.append(icon(social.icon));
    const text = element("span", "social__text");
    text.append(element("strong", "", social.name), element("span", "", social.handle || social.name));
    link.append(symbol, text, icon("arrow", "social__arrow"));
    setAccent(link, social.accent);
    item.append(link);
    list.append(item);
  });
}

function renderGames() {
  const list = document.querySelector("#games");
  list.replaceChildren();
  config.games.forEach((game, index) => {
    const referralUrl = validUrl(game.referralUrl);
    const url = referralUrl || validUrl(game.url);
    const code = typeof game.code === "string" ? game.code.trim() : "";
    const customCopy = typeof game.copyValue === "string" ? game.copyValue.trim() : "";
    const card = element("article", "game-card");
    const upcoming = !url && !code && !customCopy;
    if (upcoming) card.classList.add("game-card--upcoming");
    setAccent(card, game.accent);
    const body = element("div", "game-card__body");
    const symbol = element("div", "game-icon");
    symbol.setAttribute("aria-hidden", "true");
    symbol.append(icon(game.icon));
    const logoUrl = validUrl(game.logoUrl, true);
    if (logoUrl) {
      const image = element("img");
      image.alt = "";
      image.loading = "lazy";
      image.addEventListener("error", () => { image.remove(); symbol.replaceChildren(icon(game.icon)); }, { once: true });
      image.src = logoUrl;
      symbol.replaceChildren(image);
    }
    const content = element("div", "game-card__content");
    const titleRow = element("div", "game-card__title-row");
    titleRow.append(element("h3", "", game.title));
    const badge = upcoming ? "À venir" : game.badge;
    if (badge) titleRow.append(element("span", "game-card__badge", badge));
    content.append(titleRow, element("p", "game-card__description", game.description));
    const number = element("span", "game-card__number", String(index + 1).padStart(2, "0"));
    number.setAttribute("aria-hidden", "true");
    body.append(symbol, content, number);
    card.append(body);

    const actions = element("div", "game-card__actions");
    if (url) {
      const label = referralUrl ? "Profiter du parrainage" : "Découvrir le jeu";
      const link = externalLink(url, "game-card__visit", `${label} · ${game.title}`);
      link.append(document.createTextNode(label), icon("arrow"));
      actions.append(link);
    }
    if (customCopy || code || url) {
      const button = element("button", "copy-button");
      button.type = "button";
      const label = game.copyLabel || (code ? "Copier le code" : "Copier le lien");
      button.append(icon("copy"), element("span", "", label));
      button.setAttribute("aria-label", `${label} · ${game.title}`);
      button.addEventListener("click", () => handleCopy(button, customCopy || code || url, label, game.title, game.copySuccess));
      actions.append(button);
    }
    if (actions.childElementCount) card.append(actions);
    if (Array.isArray(game.conditions) && game.conditions.length) {
      const details = element("details", "game-conditions");
      details.append(element("summary", "", game.conditionsTitle || "Conditions du parrainage"));
      const conditions = element("ul");
      game.conditions.forEach((condition) => conditions.append(element("li", "", condition)));
      details.append(conditions);
      card.append(details);
    }
    if (upcoming) {
      const announcement = element("p", "game-card__announcement");
      announcement.append(icon("clock"));
      const release = new Date(game.releaseAt);
      const dateLabel = Number.isNaN(release.getTime()) ? "Lien à venir" : `Ouverture annoncée · ${new Intl.DateTimeFormat("fr-FR", {
        day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: game.timeZone || "Europe/Paris"
      }).format(release)} (Paris)`;
      announcement.append(document.createTextNode(dateLabel));
      card.append(announcement);
    }
    list.append(card);
  });
  const count = config.games.length;
  document.querySelector("#game-count").textContent = `${count} univers`;
  if (!count) list.append(element("p", "discover__intro", "La collection se prépare. À très bientôt !"));
}

/* Thème : sombre par défaut, préférence conservée si le stockage est disponible. */
function initTheme() {
  let theme = config.defaultTheme === "light" ? "light" : "dark";
  try {
    const saved = localStorage.getItem("kprikorn.theme");
    if (saved === "light" || saved === "dark") theme = saved;
  } catch (_) { /* Aucune dépendance au stockage. */ }
  applyTheme(theme);
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("kprikorn.theme", next); } catch (_) { /* Le thème reste actif pour cette visite. */ }
  });
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const button = document.querySelector("#theme-toggle");
  const label = theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre";
  button.setAttribute("aria-checked", String(theme === "light"));
  button.setAttribute("aria-label", label);
  button.title = label;
  document.querySelector("#theme-color").content = theme === "dark" ? "#14161e" : "#f3f0eb";
  accentNodes.forEach(({ node, rgb }) => updateAccent(node, rgb));
}

/* Presse-papiers HTTPS + repli pour ouverture locale ou permission refusée. */
async function copyText(value) {
  if (window.isSecureContext && navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(value); return; } catch (_) { /* Essayer le repli local. */ }
  }
  const previousFocus = document.activeElement;
  const selected = window.getSelection();
  const ranges = selected ? Array.from({ length: selected.rangeCount }, (_, index) => selected.getRangeAt(index).cloneRange()) : [];
  const field = element("textarea");
  field.value = value;
  field.readOnly = true;
  field.setAttribute("aria-label", "Texte à copier");
  field.style.cssText = "position:fixed;left:-9999px;top:0;font-size:16px;";
  document.body.append(field);
  let copied = false;
  try {
    field.focus({ preventScroll: true });
    field.select();
    field.setSelectionRange(0, value.length);
    copied = document.execCommand("copy");
  } finally {
    field.remove();
    if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
    if (selected && ranges.length) {
      selected.removeAllRanges();
      ranges.forEach((range) => selected.addRange(range));
    }
  }
  if (!copied) throw new Error("Presse-papiers indisponible");
}

const copyTimers = new WeakMap();
async function handleCopy(button, value, label, title, feedback) {
  if (button.dataset.busy === "true") return;
  button.dataset.busy = "true";
  clearTimeout(copyTimers.get(button));
  try {
    await copyText(value);
    button.dataset.state = "copied";
    button.replaceChildren(icon("check"), element("span", "", "Copié !"));
    button.setAttribute("aria-label", `Copié ! · ${title}`);
    showToast(`${title} · ${feedback || (label === "Copier le code" ? "Code copié" : "Lien copié")} !`);
  } catch (_) {
    button.dataset.state = "error";
    button.replaceChildren(icon("copy"), element("span", "", "Réessayer"));
    button.setAttribute("aria-label", `Réessayer la copie · ${title}`);
    showToast("La copie a été bloquée par le navigateur. Tu peux réessayer.");
  } finally {
    delete button.dataset.busy;
    copyTimers.set(button, setTimeout(() => {
      delete button.dataset.state;
      button.replaceChildren(icon("copy"), element("span", "", label));
      button.setAttribute("aria-label", `${label} · ${title}`);
    }, 2200));
  }
}
let toastTimer;
function showToast(message) {
  const toast = document.querySelector("#toast");
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => { toast.classList.remove("is-visible"); }, 2600);
}

/* Reflet et inclinaison : souris uniquement, un rendu par frame au maximum. */
function initCardMotion() {
  const pointer = matchMedia("(hover: hover) and (pointer: fine)");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  document.querySelectorAll(".game-card").forEach((card) => {
    let frame = 0;
    let coordinates = null;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      coordinates = null;
      ["--rx", "--ry", "--mx", "--my"].forEach((property) => card.style.removeProperty(property));
    };
    card.addEventListener("pointermove", (event) => {
      if (!pointer.matches || reduced.matches || event.pointerType !== "mouse") return;
      coordinates = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!coordinates) return;
        const bounds = card.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (coordinates.x - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (coordinates.y - bounds.top) / bounds.height));
        card.style.setProperty("--rx", `${(0.5 - y) * 3}deg`);
        card.style.setProperty("--ry", `${(x - 0.5) * 3}deg`);
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
      });
    });
    card.addEventListener("pointerleave", reset);
    card.addEventListener("pointercancel", reset);
    reduced.addEventListener("change", reset);
    pointer.addEventListener("change", reset);
  });
}

initTheme();
renderProfile();
renderSocials();
renderGames();
initCardMotion();
