# Kprikorn — Mon petit univers

Site personnel : **https://kprikorn777.github.io/Kprikorn-Website/**

Une page responsive en HTML, CSS et JavaScript, sans installation ni compilation. Les fichiers du site se trouvent à la racine du dépôt.

## Mettre le site à jour simplement

1. Ouvre **[Modifier mes liens et mon profil](https://github.com/kprikorn777/Kprikorn-Website/edit/main/script.js)**.
2. Modifie l’objet `config` au début du fichier : biographie, réseaux, jeux, liens ou codes de parrainage.
3. Clique sur **Commit changes**, puis enregistre la modification sur la branche **main**.
4. GitHub Pages republie automatiquement le site. Suis l’avancement dans **[Actions](https://github.com/kprikorn777/Kprikorn-Website/actions)**, puis recharge le site lorsque le déploiement est terminé.

Tu peux aussi demander les modifications dans la conversation ChatGPT connectée à ce dépôt. Les fichiers publiés sur GitHub constituent la version de référence ; une modification dans la copie sur ton ordinateur doit être envoyée sur GitHub pour apparaître en ligne.

## Que modifier ?

| Besoin | Fichier et emplacement |
| --- | --- |
| Nom, biographie, avatar | `script.js` → `config.name`, `bio`, `avatar` |
| Ajouter ou supprimer un réseau | `script.js` → `config.socials` |
| Ajouter ou supprimer un jeu | `script.js` → `config.games` |
| Lien de parrainage | Entrée du jeu → `referralUrl` |
| Code à copier | Entrée du jeu → `code` |
| Pseudo ou texte à copier | Entrée du jeu → `copyValue`, `copyLabel`, `copySuccess` |
| Conditions détaillées | Entrée du jeu → `conditions` et `conditionsTitle` |
| Couleur d’une carte | Entrée du jeu → `accent` au format hexadécimal |
| Palette, espacements, animations | [Modifier style.css](https://github.com/kprikorn777/Kprikorn-Website/edit/main/style.css) |
| Structure et métadonnées initiales | [Modifier index.html](https://github.com/kprikorn777/Kprikorn-Website/edit/main/index.html) |

Conserve les virgules, les guillemets et les crochets dans la configuration. Pour dupliquer une carte ou un réseau, copie un objet complet dans le tableau correspondant.

## WaxTCG

Une carte est réservée pour l’ouverture annoncée le **6 novembre 2026 à 20 h, heure de Paris**. Lorsque l’adresse sera connue, renseigne `url` dans l’entrée `WaxTCG` de `config.games` : les boutons de visite et de copie apparaîtront automatiquement, et le badge passera de « À venir » à « TCG ».

L’heure annoncée n’active pas de lien automatiquement. La carte reste informative tant que son URL n’a pas été ajoutée.

## Avatar et logos

Le monogramme K intégré est utilisé lorsque `avatar.imageUrl` vaut `null`. Pour utiliser une image, ajoute-la au dépôt et indique son chemin relatif dans `avatar.imageUrl`. Les cartes acceptent également une image dans `logoUrl`. Si une image ne charge pas, l’icône intégrée reste disponible.

## Publication automatique

La source de GitHub Pages doit être **Deploy from a branch → main → / (root)** dans **[Settings → Pages](https://github.com/kprikorn777/Kprikorn-Website/settings/pages)**. Chaque modification enregistrée sur cette branche déclenche une republication, sans serveur ni commande de build.

Le fichier `.nojekyll` indique à GitHub Pages de servir les fichiers statiques directement. La préférence sombre/claire est mémorisée dans le navigateur de chaque visiteur.

En cas de problème, consulte le dernier déploiement dans **[Actions](https://github.com/kprikorn777/Kprikorn-Website/actions)**. Pour revenir à une version précédente, utilise l’historique Git du fichier concerné et enregistre un nouveau commit.
