// Sélection de toutes les cartes produits dans la page
let cards = document.querySelectorAll(".cardProduct");

// Sélection de le paragraphe qui affiche le nombre de produits dans le panier
let nbrProducts = document.querySelector(".basket-number");


// Rôle : compter le nombre de cartes sélectionnées (ajoutées au panier)
// Paramètre : aucun
// Retour : le nombre d'éléments ayant la classe "cardSelect"
function ajouterAuPanier() {

    // On récupère toutes les cartes qui ont été sélectionnées
    let selectedCards = document.querySelectorAll(".cardSelect");

    console.log(selectedCards);

    // On retourne le nombre total de cartes sélectionnées
    return selectedCards.length;
}


// Rôle : ajouter un comportement au clic sur chaque carte produit
// Lorsqu'on clique sur une carte :
// - on ajoute/enlève la classe "cardSelect"
// - on met à jour le nombre de produits dans le panier
function changeColorCard() {

    // On parcourt toutes les cartes produits
    cards.forEach((card) => {

        // On ajoute un événement au clic sur chaque carte
        card.addEventListener("click", () => {

            // On toggle la classe : sélection / désélection visuelle
            card.classList.toggle("cardSelect");

            // On calcule le nombre total de produits sélectionnés
            let total = ajouterAuPanier();

            console.log(total);

            // On met à jour l'affichage du nombre de produits dans le panier
            nbrProducts.innerHTML = total;
        });

    });

}

// Activation de la logique de sélection des cartes
changeColorCard();