import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import Splide from '@splidejs/splide';
import { AllCabinetsComponent } from '../../components/all-cabinets/all-cabinets.component';
import { ExpressCabinetsComponent } from '../../components/express-cabinets/express-cabinets.component';
@Component({
  selector: 'app-home-page',
  imports: [
    NgOptimizedImage,
    RouterOutlet,
    AllCabinetsComponent,
    ExpressCabinetsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  ngOnInit() {
    this.initializeHeroSlider();
  }

  initializeHeroSlider() {
    new Splide('#hero-slider', {
      type: 'fade',
      rewind: true,
      autoplay: false,
      arrows: false,
      interval: 2000,
      drag: true,
    }).mount();
  }
}
