
// RÉCUPÉRATION DES ÉLÉMENTS HTML

// On récupère la div qui affichera le chronomètre
let chrono = document.querySelector("#chrono")

// On récupère le bouton "start"
let stratBtn = document.querySelector("#start")

// On récupère le bouton "stop"
let stopBtn = document.querySelector("#stop")

// On récupère le bouton "reset"
let restetBtn = document.querySelector("#reset")



// VARIABLES DU CHRONOMÈTRE

// Variable pour stocker les heures
let heures = 0;

// Variable pour stocker les minutes
let minutes = 0;

// Variable pour stocker les secondes
let secondes = 0;



// VARIABLE POUR LE setTimeout

// Cette variable servira à stocker le setTimeout
// afin de pouvoir l'arrêter avec clearTimeout()
let timeout;


// ÉTAT DU CHRONOMÈTRE

// passera à false quand on voudra lancer le chrono
let estArrete = true;




// FONCTION DÉMARRER

/**
 * role : démarrer le chronométre 
 * param : rien 
 * return : rien
 */
function demarrer() {

    // Vérifie si le chrono est arrêté
    if (estArrete === true) {

        // estArrete devient false
        // cela signifie que le chrono fonctionne
        estArrete = false;

        // Lance la fonction qui fait défiler le temps
        defilerTemps();
    }
}



// FONCTION ARRÊTER

/**
 * role : arretter le chronométre 
 * param : rien 
 * return : rien
 */
function arretter() {

    // Vérifie si le chrono est en cours d'exécution
    if (estArrete === false) {

        // estArrete devient true
        // cela signifie que le chrono est arrêté
        estArrete = true;

        // Arrête le setTimeout en cours
        // Cela stoppe le défilement du chrono
        clearTimeout(timeout);
    }
}



// FONCTION QUI FAIT DÉFILER LE TEMPS

/**
 * role : faire défiler le temps et augmenter les compteur de minutes, secondes et heures pusi les afficher dans la page
 * param : rien 
 * return : rien
 */
function defilerTemps(){

    // On vérifie si le chrono est arrêté
    // Si c'est le cas, on quitte la fonction immédiatement
    if (estArrete === true) {

        // return arrête l'exécution de la fonction
        return;
    }

    

    // ==========================
    // CONVERSION EN NOMBRES
    // ==========================

    // Les valeurs peuvent être des chaînes de caractères
    // à cause de l'affichage avec les zéros devant (ex : "04")
    // On les reconvertit donc en nombres
    // pour pouvoir les incrémenter

    secondes = parseInt(secondes)
    minutes = parseInt(minutes)
    heures = parseInt(heures)



    // ==========================
    // INCRÉMENTATION DES SECONDES
    // ==========================

    // On ajoute 1 seconde
    secondes++;



    // ==========================
    // GESTION DES MINUTES
    // ==========================

    // Si les secondes atteignent 60 :
    // - on ajoute 1 minute
    // - on remet les secondes à 0
    if (secondes === 60) {
        minutes++
        secondes = 0
    }



    // ==========================
    // GESTION DES HEURES
    // ==========================

    // Si les minutes atteignent 60 :
    // - on ajoute 1 heure
    // - on remet les minutes à 0
    if (minutes === 60) {
        heures++;
        minutes = 0;
    }



    // ==========================
    // FORMATAGE DE L'AFFICHAGE
    // ==========================

    // Si les secondes sont inférieures à 10,
    // on ajoute un zéro devant
    // Exemple : 4 devient "04"
    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    // Même principe pour les minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Même principe pour les heures
    if (heures < 10) {
        heures = "0" + heures;
    }



    // ==========================
    // AFFICHAGE DANS LE HTML
    // ==========================

    // On injecte le texte dans la div du chrono
    // Utilisation d'une template string avec ${}
    chrono.textContent = `${heures}:${minutes}:${secondes}`



    // ==========================
    // RELANCE AUTOMATIQUE
    // ==========================

    // setTimeout relance la fonction après 1000 ms
    // soit 1 seconde
    // On stocke le timeout dans une variable
    // pour pouvoir l'arrêter avec clearTimeout()
    timeout = setTimeout(defilerTemps, 1000)

};



// FONCTION RESET

/**
 * role : remettre le chronométre à zéro
 * param : rien 
 * return : rien
 */
function reset(){

    // Remet l'affichage du chrono à zéro
    chrono.textContent="00:00:00"


    // Le chrono repasse à l'état arrêté
    estArrete = true;



    // ==========================
    // REMISE À ZÉRO DES VARIABLES
    // ==========================

    secondes = 0;
    minutes = 0;
    heures = 0;



    // ==========================
    // ARRÊT DU setTimeout
    // ==========================

    clearTimeout(timeout);
}




// Lance le chrono au clic sur le bouton start
stratBtn.addEventListener("click", demarrer);

// Arrête le chrono au clic sur le bouton stop
stopBtn.addEventListener("click", arretter);

// Remet le chrono à zéro au clic sur le bouton reset
restetBtn.addEventListener("click", reset);