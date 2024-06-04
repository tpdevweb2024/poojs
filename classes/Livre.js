export class Livre {
  constructor(id, titre, auteur, annee, dispo = true) {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.annee = annee;
    this.dispo = dispo;
  }
}
