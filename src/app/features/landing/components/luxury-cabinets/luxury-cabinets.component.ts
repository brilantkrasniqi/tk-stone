import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-luxury-cabinets',
  imports: [],
  templateUrl: './luxury-cabinets.component.html',
  styleUrl: './luxury-cabinets.component.css',
})
export class LuxuryCabinetsComponent {
  ngOnInit() {
    this.initializeLuxurySlider();
  }

  initializeLuxurySlider() {
    new Splide('#luxury-cabinets', {
      type: 'loop',
      drag: 'free',
      speed: 130,
      snap: true,
      perPage: 6,
      focus: 'center',
      pagination: false,
      lazyLoad: true,
      breakpoints: {
        1200: {
          perPage: 4,
        },
        776: {
          perPage: 3,
        },
        600: {
          perPage: 1,
        },
      },
    }).mount();
  }
}
