import { Bibliotheque } from "./classes/Bibliotheque.js";
import { Livre } from "./classes/Livre.js";

let bibliotheque = new Bibliotheque();

// On ajoute 3 livres
let germinal = new Livre(1232, "Germinal", "Emile Zola", 1785);
let laterre = new Livre(1345, "La terre", "Emile Zola", 1887);
let miserables = new Livre(1567, "Les misérables", "Victor Hugo", 1862);
let lavare = new Livre(1876, "L'avare", "Molière", 1810, false);
bibliotheque.ajouterLivre(germinal);
bibliotheque.ajouterLivre(laterre);
bibliotheque.ajouterLivre(miserables);
bibliotheque.ajouterLivre(lavare);

// On vérifie les dispos
// console.log(bibliotheque.afficherLivresDispos());
// console.log(bibliotheque.afficherLivresDispos(false));

bibliotheque.emprunterLivre(1232);
bibliotheque.retournerLivre(1876);
console.log(bibliotheque.collection);
