
/* 
## Exo 4 - Code cesar
Écrire un script qui permet de chiffrer un mot en prenant chacune des lettres et en la remplaçant par celle qui suit dans l’alphabet. 
Vous n’utiliserez pas de caractères spéciaux ou accentués
Exemple : La toile → MBUPJMF

Pour aller plus loin : et si on pouvait chiffrer des phrases entières 
*/

/**
 * demander le mot a encoder à l'utilisateur
 *  rien
 * @returns le mot a encoder 
 */
function demanderCode(){
    let rep = prompt("Quel mot voulez-vosu encoder ? ")
    return rep;
}

/**
 * encoder un mot
 * @param {*} motAencoder 
 * return : le mot encodé
 */
function codeCesar(motAencoder) {

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let motEncode = "";

    // parcourir chaque lettre
    for (let i = 0; i < motAencoder.length; i++) {

        let lettre = motAencoder[i];
        let nouvelleLettre = "";


        if(lettre === "z") {
            // encoder la lettre z en a
            nouvelleLettre = "a";
        } else {
            // trouver la position de la lettre dans l'alphabet
            let index = alphabet.indexOf(lettre);

            // encoder la elttre cà d passer à la lettre suivante
            nouvelleLettre = alphabet[(index + 1)];
        }



        motEncode += nouvelleLettre;

    }

    return motEncode.toUpperCase();
}

/**
 * affiche le mot une fois encoder
 * @param {*} motEncoder 
 */
function afficherMotEncoder(motEncoder){
    alert(motEncoder)
}

//lancer le scenario au clic : prompt -> encodage -> affichage du mot encodé
document.querySelector("#btnCesar").addEventListener("click", ()=>{

    let motAEncoder = demanderCode()
    let motEncoder = codeCesar(motAEncoder);
    afficherMotEncoder(motEncoder)
})
