// src/app/models/produit.ts
export interface Produit {
  id: string;
  nom: string;
  prix: number; // en FCFA (XAF)
  categorie: string;
}
