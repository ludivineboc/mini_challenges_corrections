


function demander() {

    // On demande à l'utilisateur d'entrer une phrase à "traduire en minion"
    let rep = prompt("Traduire en minion :");

    // On transforme la phrase en tableau de mots en coupant à chaque espace
    let tableauRep = rep.split(" ");

    return tableauRep;

}

function traduire(tableauContenantLaPhrase) {

    // Variable qui contiendra la phrase reconstruite après modification
    let repTraduit = "";


    // Si la phrase contient moins de 5 mots
    if (tableauContenantLaPhrase.length < 5) {

        // On choisit un index aléatoire dans le tableau
        nbrAlea1 = Math.floor(Math.random() * tableauContenantLaPhrase.length);

        // On remplace le mot à cet index par "banana"
        tableauContenantLaPhrase[nbrAlea1] = "banana";

        // On reconstruit la phrase mot par mot
        tableauContenantLaPhrase.forEach(mot => {

            // On ajoute chaque mot avec un espace dans la chaîne finale
            repTraduit = repTraduit + " " + mot;

        });

        alert(`Votre phrase traduite : ${repTraduit}`);


    } else {

        // Si la phrase contient 5 mots ou plus, on fait 2 remplacements aléatoires

        // Premier index aléatoire
        nbrAlea1 = Math.floor(Math.random() * tableauContenantLaPhrase.length);

        // Deuxième index aléatoire
        nbrAlea2 = Math.floor(Math.random() * tableauContenantLaPhrase.length);

        // Remplacement des deux mots par "banana"
        tableauContenantLaPhrase[nbrAlea1] = "banana";
        tableauContenantLaPhrase[nbrAlea2] = "banana";

        console.log(tableauContenantLaPhrase);

        // On reconstruit la phrase modifiée
        tableauContenantLaPhrase.forEach(mot => {

            // Ajout progressif des mots dans la chaîne finale
            repTraduit = repTraduit + " " + mot;

        });

        alert(`Votre phrase traduite : ${repTraduit}`);
    }

}

document.querySelector("#btnMinion").addEventListener("click", () => {

    let phraseAtraduire = demander();
    traduire(phraseAtraduire)

})