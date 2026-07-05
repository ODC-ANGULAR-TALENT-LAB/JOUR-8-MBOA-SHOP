// src/environments/environment.ts (base — utilisée en production)
export const environment = {
  production: true,
  // URL relative : en production, le catalogue est servi comme asset statique
  // (public/api/produits.json) depuis le même domaine que l'application.
  serverUrl: '',
  siteName: 'MboaShop',
};
