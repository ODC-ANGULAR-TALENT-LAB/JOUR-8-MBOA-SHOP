// src/app/services/produit.service.ts
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Produit } from '../models/produit';

@Injectable({ providedIn: 'root' })
export class ProduitService {
  private readonly http = inject(HttpClient);

  // Tâche 4 — l'URL vient des variables d'environnement.
  private readonly url = `${environment.serverUrl}/api/produits.json`;

  // Pour déclencher volontairement une 404 (tâche 5), remplacez « produits »
  // par « produit » ci-dessus : httpResource remontera l'erreur via .error().

  // --- Tâche 1 : état local réactif, encapsulé et exposé en lecture seule ---
  private readonly _produits = signal<Produit[]>([]);
  readonly produits = this._produits.asReadonly();

  ajouter(produit: Produit): void {
    this._produits.update((liste) => [...liste, produit]);
  }

  modifier(id: string, modifs: Partial<Produit>): void {
    this._produits.update((liste) =>
      liste.map((p) => (p.id === id ? { ...p, ...modifs } : p)),
    );
  }

  supprimer(id: string): void {
    this._produits.update((liste) => liste.filter((p) => p.id !== id));
  }

  // --- Tâche 2 : lecture du catalogue depuis le serveur (GET) ---
  // httpResource expose .value() / .isLoading() / .error() sous forme de signals.
  readonly catalogue = httpResource<Produit[]>(() => this.url);

  // --- Écriture : httpResource est réservé aux lectures, on passe par HttpClient ---
  creer(produit: Produit) {
    return this.http.post<Produit>(this.url, produit);
  }
}
