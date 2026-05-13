// Tableau contenant plusieurs adjectifs possibles
let adjectif = ["Incroyable", "Mystérieux", "Rapide"];

// Tableau contenant plusieurs animaux possibles
let animaux = ["python", "tortue", "licorne"];

/**
 * Fonction qui génère un nom aléatoire
 * en associant un adjectif et un animal.
 * 
 * @param {Array} tableauAdjectifs - Liste des adjectifs
 * @param {Array} tableauAnimaux - Liste des animaux
 */
function afficheAdjectifEtAnimal(tableauAdjectifs, tableauAnimaux) {

    // Génère un index aléatoire pour choisir un adjectif
    let nbrAlea1 = Math.floor(Math.random() * tableauAdjectifs.length);

    // Génère un index aléatoire pour choisir un animal
    let nbrAlea2 = Math.floor(Math.random() * tableauAnimaux.length);

    // Récupère l’adjectif correspondant à l’index aléatoire
    let adjectifPioche = tableauAdjectifs[nbrAlea1];

    // Récupère l’animal correspondant à l’index aléatoire
    let animalPioche = tableauAnimaux[nbrAlea2];

    // Affiche le résultat dans l’élément HTML ayant la classe ".hero-result"
    document.querySelector(".hero-result").innerHTML =
        ` <span class="nom-de-super-hero">${adjectifPioche} ${animalPioche} </span> on a besoin de toi !`;
}

// Ajoute un écouteur d’événement sur le bouton ayant l’id "GoBtn"
document.querySelector("#GoBtn").addEventListener("click", () => {

    // Lance la fonction lorsqu’on clique sur le bouton
    afficheAdjectifEtAnimal(adjectif, animaux);

});