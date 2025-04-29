import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
@Component({
  selector: 'app-express-cabinets',
  imports: [],
  templateUrl: './express-cabinets.component.html',
  styleUrl: './express-cabinets.component.css',
})
export class ExpressCabinetsComponent {
  ngOnInit() {
    this.initializeExpressCabinetsSlider();
  }

  initializeExpressCabinetsSlider() {
    new Splide('#express-cabinets', {
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
