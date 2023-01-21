import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[];
  categories: Categorie[];

  constructor() {
    //console.log("creation de l'instance du service ");
    this.categories = [
      { idCat: 1, nomCat: 'PC' },
      { idCat: 2, nomCat: 'Imprimante' },
    ];
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC  Mac',
        prixProduit: 3000.6,
        dateCreation: new Date('01/14/2011'),
        category: { idCat: 1, nomCat: 'PC' },
      },
      {
        idProduit: 2,
        nomProduit: 'Imprimante Epson',
        prixProduit: 450,
        dateCreation: new Date('12/17/2010'),
        category: { idCat: 2, nomCat: 'Imprimante' },
      },
      {
        idProduit: 3,
        nomProduit: 'Tablette Samsung',
        prixProduit: 900.123,
        dateCreation: new Date('02/20/2020'),
        category: { idCat: 1, nomCat: 'PC' },
      },
    ];
  }
  listeProduits(): Produit[] {
    return this.produits;
  }
  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }
  supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
         this.produits.splice(index, 1); } }); */
  }
  consulterProduit(id: number): Produit {
    return this.produits.find((p) => p.idProduit == id)!;
  }

  updateProduit(p: Produit) {
    // console.log(p);
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }
  consulterCategorie(id: number): Categorie {
    return this.categories.find((cat) => cat.idCat == id)!;
  }
}
