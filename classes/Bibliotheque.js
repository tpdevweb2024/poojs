export class Bibliotheque {
  constructor() {
    this.collection = [];
  }

  afficherLivresDispos(available = true) {
    let books = [];
    for (let livre of this.collection) {
      if (livre.dispo === available) {
        books.push(livre);
      }
    }
    return books;
  }

  ajouterLivre(livre) {
    this.collection.push(livre);
  }

  emprunterLivre(livre_id) {
    let books = this.afficherLivresDispos();
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === livre_id) {
        books[i].dispo = false;
      }
    }
    return books;
  }

  retournerLivre(livre_id) {
    let books = this.afficherLivresDispos(false);
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === livre_id) {
        books[i].dispo = true;
      }
    }
    return books;
  }

  getAllBooksByDate(desc = true) {
    let books = this.collection;
    books.sort((a, b) =>
      desc === true ? b.annee - a.annee : a.annee - b.annee
    );
    return books;
  }
}
