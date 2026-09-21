import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  r = signal(30);
  g = signal(58);
  b = signal(95);

  hexadecimal = computed(() => {
    const rHex = this.r().toString(16).padStart(2, '0');
    const gHex = this.g().toString(16).padStart(2, '0');
    const bHex = this.b().toString(16).padStart(2, '0');

    return (rHex + gHex + bHex).toUpperCase();
  });

  promedio = computed(() => {
    return Math.round((this.r() + this.g() + this.b()) / 3);
  });

  colorRGB = computed(() => {
    return 'rgb(' + this.r() + ',' + this.g() + ',' + this.b() + ')';
  });

  colorGris = computed(() => {
    return 'rgb(' +
      this.promedio() + ',' +
      this.promedio() + ',' +
      this.promedio() + ')';
  });

  cambiarDesdeHex(hexadecimal: string) {

    const hex = hexadecimal.replace('#', '');

    if (hex.length === 6) {
      this.r.set(parseInt(hex.substring(0, 2), 16));
      this.g.set(parseInt(hex.substring(2, 4), 16));
      this.b.set(parseInt(hex.substring(4, 6), 16));
    }
  }

  cambiarR(valor: number) {
    this.r.set(valor);
  }

  cambiarG(valor: number) {
    this.g.set(valor);
  }

  cambiarB(valor: number) {
    this.b.set(valor);
  }
}

