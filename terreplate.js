// On récupère l’élément HTML qui représente le personnage (Pac-Man)
let personnage = document.querySelector(".personnage");

// On récupère le plateau de jeu (la zone dans laquelle le personnage peut se déplacer)
let plateau = document.querySelector(".plateau-jeu");

// Position initiale du personnage sur l’axe horizontal (gauche / droite)
let posX = 0;

// Position initiale du personnage sur l’axe vertical (haut / bas)
let posY = 0;

// Direction actuelle du personnage (sert à savoir où il “regarde”)
let direction = "right"; // direction par défaut au chargement

// Taille du personnage (utilisée pour éviter qu’il dépasse les bords)
const taillePerso = 100;

// Fonction qui met à jour l’orientation visuelle du personnage
function updateDirection() {

  // Angle de rotation par défaut
  let angle = 0;

  // Si le personnage va à droite → pas de rotation
  if (direction === "right") angle = 0;

  // Si le personnage va à gauche → rotation 180°
  if (direction === "left") angle = 180;

  // Si le personnage va en haut → rotation -90°
  if (direction === "up") angle = -90;

  // Si le personnage va en bas → rotation 90°
  if (direction === "down") angle = 90;

  // On applique la rotation CSS au personnage
  personnage.style.transform = `rotate(${angle}deg)`;
}

// On écoute les touches du clavier
window.addEventListener("keydown", (event) => {

  // On récupère la taille actuelle du plateau (utile si la fenêtre change de taille)
  const largeur = plateau.clientWidth;
  const hauteur = plateau.clientHeight;

  // Flèche haut : on monte (on diminue Y) et on change la direction
  if (event.key === "ArrowUp") {
    posY -= 100;
    direction = "up";
  }

  // Flèche bas : on descend (on augmente Y) et on change la direction
  if (event.key === "ArrowDown") {
    posY += 100;
    direction = "down";
  }

  // Flèche gauche : on va à gauche (on diminue X) et on change la direction
  if (event.key === "ArrowLeft") {
    posX -= 100;
    direction = "left";
  }

  // Flèche droite : on va à droite (on augmente X) et on change la direction
  if (event.key === "ArrowRight") {
    posX += 100;
    direction = "right";
  }

  // ------------------- LIMITES DU PLATEAU -------------------

  // Empêche de sortir du côté gauche
  if (posX < 0) posX = 0;

  // Empêche de sortir par le haut
  if (posY < 0) posY = 0;

  // Empêche de sortir par la droite (largeur - taille du personnage)
  if (posX > largeur - taillePerso) {
    posX = largeur - taillePerso;
  }

  // Empêche de sortir par le bas (hauteur - taille du personnage)
  if (posY > hauteur - taillePerso) {
    posY = hauteur - taillePerso;
  }

  // Application de la position calculée au style CSS du personnage
  personnage.style.left = posX + "px";
  personnage.style.top = posY + "px";

  // Mise à jour de l’orientation visuelle (rotation du personnage)
  updateDirection();
});