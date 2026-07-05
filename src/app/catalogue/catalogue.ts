// src/app/catalogue/catalogue.ts
import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-catalogue',
  imports: [DecimalPipe],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  private readonly produitService = inject(ProduitService);

  // On récupère la ressource exposée par le service — pas de ngOnInit.
  readonly catalogue = this.produitService.catalogue;
}
