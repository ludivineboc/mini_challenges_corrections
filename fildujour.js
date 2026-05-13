
// Obtenir la date et l'heure actuelle et la stocker dans une variable 
let aujourdHui = new Date();
    
// Récupérer seulement l'heure et la stocker dans une variable 
let heure = aujourdHui.getHours(); 
let minutes = aujourdHui.getMinutes();


// rôle :définir le moment de la journée (matin, aprem, soir)
// parametre: l'heure actuelle 
// retourne: le moment de la journée
function definirMoment (h){
    let moment ="";

    if(h<6){
        moment="nuit";
    }
    else if (h>=6 && h<12){
        moment="matin";
    } else if (h >= 12 && h <=18) {
        moment="aprem";
    } else {
        moment="soir";
    }
    return moment;
}

let moment = (definirMoment(heure))

// rôle : modifier le fond du body en lui modifiant sa classe
// parametre : le moment de la journée 
// retourne : rien 
function modifierClasse(m) {
    // Récupérer l'élément <body>
    let body = document.querySelector('body');

    // Supprimer toutes les classes existantes sur <body>
    body.className = "";

    // Ajouter la classe correspondante en fonction du moment de la journée
    if (m === "matin") {
        body.classList.add("bgMatin");
    } else if (m === "nuit") {
        body.classList.add("bgNuit");
    } 
    else if (m === "aprem") {
        body.classList.add("bgAprem");
    } else {
        body.classList.add("bgSoir");
    }
}

modifierClasse(moment)

// Afficher l'heure dans la div au centre de la page
document.querySelector('p').innerHTML += `${heure}:${minutes}`