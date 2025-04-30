import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
@Component({
  selector: 'app-all-cabinets',
  imports: [],
  templateUrl: './all-cabinets.component.html',
  styleUrl: './all-cabinets.component.css',
})
export class AllCabinetsComponent {
  ngOnInit() {
    this.initializeAllCabinetsSlider();
  }

  initializeAllCabinetsSlider() {
    new Splide('#all-cabinets', {
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
