import { Component } from '@angular/core';
import { ComponenteAComponent } from './componente-a/componente-a';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteAComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

