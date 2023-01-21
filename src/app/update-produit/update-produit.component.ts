import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../Services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss'],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentProduit);
  }
  updateProduit() {
    // this.produitService.updateProduit(this.currentProduit);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
