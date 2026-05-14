// VERSION 1 : UNE SEULE COULEUR FIXE


/**
 * Calorie une case en ajoutant une classe CSS
 * (ici la couleur est définie en CSS via .bg-red)
 * @param {*} caseClique - la case cliquée (élément HTML td)
 */
function colorerCase(caseClique){

     // Ajoute la classe "bg-red" à la case cliquée
     // Cela change son apparence via le CSS
     caseClique.classList.add("bg-red");

}



// On récupère toutes les cases de la grille version 1
// querySelectorAll retourne une NodeList (liste de noeuds HTML)
let cases = document.querySelectorAll(".case-v1");



// On parcourt chaque case de la grille
cases.forEach((uneCase) => {

    // On ajoute un événement "click" sur chaque case
    uneCase.addEventListener("click", (el) => {

        // el.target correspond à la case cliquée
        colorerCase(el.target);

    });

});


/**
 * role : netoyer la grille en retirant la classe bg-red au cases qui l'ont
 * param : rien 
 * return : rien car affiche
 */
function netoyerGrille(){

    // On récupère toutes les cases déjà coloriées en rouge
    let casesColores = document.querySelectorAll(".bg-red")

    
    // On parcourt toutes les cases colorées
    casesColores.forEach((uneCase)=>{

        // On enlève la classe "bg-red"
        // donc la case redevient blanche
        uneCase.classList.remove("bg-red")

    })

}



// On ajoute un événement au bouton "clear"
// Quand on clique dessus, on nettoie la grille
document.querySelector("#clearBtn").addEventListener("click", netoyerGrille)




//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
// VERSION 2 : COULEUR PERSONNALISÉE

/**
 * Colorie une case avec une couleur choisie par l'utilisateur
 * @param {*} caseClique - la case cliquée
 * @param {*} couleur - couleur choisie dans l'input color
 */
function colorerCasev2(caseClique, couleur){

     // Applique une couleur de fond directement en CSS inline
     // ⚠ ici on écrase le style background-color
     caseClique.style = (`background-color:${couleur}`)

}



// On récupère toutes les cases de la version 2
let casesv2 = document.querySelectorAll(".case-v2");



// On récupère l'input de type color
// il permet à l'utilisateur de choisir une couleur
let colorPicker = document.querySelector("#colorPicker");



// On boucle sur chaque case de la grille version 2
casesv2.forEach((uneCasev2) => {

    // On ajoute un événement au clic sur chaque case
    uneCasev2.addEventListener("click", (el2) => {

        // On récupère la couleur choisie par l'utilisateur
        // ex : "#ff0000"
        let couleurChoisie = colorPicker.value;

       

        // On applique la couleur à la case cliquée
        colorerCasev2(el2.target, couleurChoisie);

    });

});


// lorsqu'on click sur le bouton vider la grille on parcours toutes les cases et on leur applique un bg blanc
document.querySelector("#clearBtn2").addEventListener("click", () => {
    document.querySelectorAll(".case-v2").forEach(cell => {
        cell.style.backgroundColor = "white";
    });
});