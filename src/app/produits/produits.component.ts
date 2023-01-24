import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { AuthService } from '../Services/auth.service';
import { ProduitService } from '../Services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent implements OnInit {
  produits!: Produit[];

  constructor(
    private produitService: ProduitService,
    public authService: AuthService
  ) {
    // this.produits = this.produitService.listeProduits();
  }

  ngOnInit(): void {
    this.chargerProduits();
  }
  chargerProduits() {
    this.produitService.listeProduit().subscribe((prods) => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log('produit supprimé');
        this.chargerProduits();
      });
  }
  /* supprimerProduit(prod: Produit) {
    // console.log(prod);

    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.produitService.supprimerProduit(prod);
    console.log(prod);
  } */
}
