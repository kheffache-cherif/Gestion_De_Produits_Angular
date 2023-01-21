import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../Services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss'],
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories!: Categorie[];

  newIdCat!: number;
  newCategorie!: Categorie;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
  }

  addProduit() {
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);

    console.log('je suis ajouter');
  }
}
