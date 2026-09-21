import { Component } from '@angular/core';
import { ComponenteBComponent } from '../componente-b/componente-b';
import { ComponenteCComponent } from '../componente-c/componente-c';
import { ColorService } from '../color';

@Component({
  selector: 'app-componente-a',
  standalone: true,
  imports: [ComponenteBComponent, ComponenteCComponent],
  templateUrl: './componente-a.html',
  styleUrl: './componente-a.css'
})
export class ComponenteAComponent {

  hexadecimalEscrito: string = '800020';

  constructor(public colorService: ColorService) {
  }

  cambiarHexadecimal(event: Event) {
    const input = event.target as HTMLInputElement;
    this.hexadecimalEscrito = input.value;
  }

  mostrarColor() {
    this.colorService.cambiarDesdeHex(this.hexadecimalEscrito);
    this.hexadecimalEscrito = this.colorService.hexadecimal();
  }

  cambiarR(valor: number) {
    this.colorService.cambiarR(valor);
    this.hexadecimalEscrito = this.colorService.hexadecimal();
  }

  cambiarG(valor: number) {
    this.colorService.cambiarG(valor);
    this.hexadecimalEscrito = this.colorService.hexadecimal();
  }

  cambiarB(valor: number) {
    this.colorService.cambiarB(valor);
    this.hexadecimalEscrito = this.colorService.hexadecimal();
  }
}

