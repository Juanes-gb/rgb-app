import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-componente-b',
  standalone: true,
  imports: [],
  templateUrl: './componente-b.html',
  styleUrl: './componente-b.css'
})
export class ComponenteBComponent {

  letra = input<string>('');
  valor = input<number>(0);

  cambioValor = output<number>();

  cambiarValor(event: Event) {
    const input = event.target as HTMLInputElement;
    let nuevoValor = Number(input.value);

    if (nuevoValor < 0) {
      nuevoValor = 0;
    }

    if (nuevoValor > 255) {
      nuevoValor = 255;
    }

    this.cambioValor.emit(nuevoValor);
  }
}

