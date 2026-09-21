import { Component } from '@angular/core';
import { ComponenteBComponent } from '../componente-b/componente-b';
import { ComponenteCComponent } from '../componente-c/componente-c';

@Component({
  selector: 'app-componente-a',
  standalone: true,
  imports: [ComponenteBComponent, ComponenteCComponent],
  templateUrl: './componente-a.html',
  styleUrl: './componente-a.css'
})
export class ComponenteAComponent {

  hexadecimal: string = '800020';

  r: number = 128;
  g: number = 0;
  b: number = 32;

  cambiarHexadecimal(event: Event) {
    const input = event.target as HTMLInputElement;
    this.hexadecimal = input.value;
  }

  mostrarColor() {
    const hex = this.hexadecimal.replace('#', '');

    if (hex.length === 6) {
      this.r = parseInt(hex.substring(0, 2), 16);
      this.g = parseInt(hex.substring(2, 4), 16);
      this.b = parseInt(hex.substring(4, 6), 16);
    }
  }

  cambiarR(valor: number) {
    this.r = valor;
  }

  cambiarG(valor: number) {
    this.g = valor;
  }

  cambiarB(valor: number) {
    this.b = valor;
  }
}

