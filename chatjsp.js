// Tableau contenant plusieurs réponses possibles du chatbot
let tableauRep = [
    "le ciel est bleu",
    "les bananes c'est bon",
    "je deteste claude",
    "j'ai soif"
];


// Rôle : demander une question à l'utilisateur
// Paramètre : aucun
// Retour : rien
function chat() {

    // Affiche une boîte de dialogue pour poser une question
    prompt("Quelle est ta question aujourd'hui ?");
}


// Rôle : choisir une réponse aléatoire dans le tableau
// Paramètre : - tableauDeReponse → tableau contenant les réponses possibles
// Retour : rien
function repondAuPif(tableauDeReponse) {

    // Génère un nombre aléatoire entre 0 et la taille du tableau - 1
    let nbrAlea = Math.floor(Math.random() * tableauDeReponse.length);

    // Affiche une réponse aléatoire dans une alerte
    alert(tableauDeReponse[nbrAlea]);

}

//au clic sur le bouton on lance le scénario
document.querySelector("#btnChat").addEventListener("click", () => {
    // Lance la fonction qui pose la question
    chat();

    // Lance la fonction qui affiche une réponse aléatoire
    repondAuPif(tableauRep);
})
