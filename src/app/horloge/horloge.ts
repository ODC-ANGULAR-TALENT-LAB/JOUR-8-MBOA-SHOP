// src/app/horloge/horloge.ts
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-horloge',
  template: `
    <p class="horloge">
      <span class="pastille"></span>
      Compteur : <strong>{{ secondes() }}</strong> s
    </p>
  `,
  styles: [
    `
      .horloge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0 0 1.5rem;
        padding: 0.45rem 0.9rem;
        background: #fff;
        border: 1px solid var(--bordure, #e4e7eb);
        border-radius: 999px;
        font-size: 0.9rem;
        color: var(--texte-doux, #52606d);
        box-shadow: 0 2px 8px rgba(31, 41, 51, 0.05);
      }
      .horloge strong {
        color: var(--orange-fonce, #e65100);
      }
      .pastille {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--vert, #1b8a3a);
        animation: pulse 1s ease-in-out infinite;
      }
      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.25;
        }
      }
    `,
  ],
})
export class Horloge {
  // interval(1000) émet 0, 1, 2, 3… chaque seconde.
  // toSignal convertit l'Observable en signal : désabonnement automatique,
  // aucun subscribe manuel ni ngOnDestroy.
  readonly secondes = toSignal(interval(1000), { initialValue: 0 });
}
