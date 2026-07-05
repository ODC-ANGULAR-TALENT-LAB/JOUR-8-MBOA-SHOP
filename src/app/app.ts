import { Component, signal } from '@angular/core';
import { Catalogue } from './catalogue/catalogue';
import { Horloge } from './horloge/horloge';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [Catalogue, Horloge],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal(environment.siteName);
}
