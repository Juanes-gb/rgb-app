import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-componente-c',
  standalone: true,
  imports: [],
  templateUrl: './componente-c.html',
  styleUrl: './componente-c.css'
})
export class ComponenteCComponent {

  r = input<number>(0);
  g = input<number>(0);
  b = input<number>(0);

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
}

