import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { AllCabinetsComponent } from '../../components/all-cabinets/all-cabinets.component';
import { ExpressCabinetsComponent } from '../../components/express-cabinets/express-cabinets.component';
import { LuxuryCabinetsComponent } from '../../components/luxury-cabinets/luxury-cabinets.component';
@Component({
  selector: 'app-home-page',
  imports: [
    NgOptimizedImage,
    AllCabinetsComponent,
    ExpressCabinetsComponent,
    LuxuryCabinetsComponent,
    NgIf,
    NgClass,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  selectedSlider: string = 'all-cabinets';

  ngOnInit() {
    this.initializeHeroSlider();
    this.initializeImageSlideIn();
    this.initializeCabinetrySlider();
    this.initializeReviewsSlider();
  }

  initializeHeroSlider() {
    new Splide('#hero-slider', {
      type: 'fade',
      rewind: true,
      autoplay: true,
      arrows: false,
      interval: 3000,
      drag: true,
    }).mount();
  }

  initializeImageSlideIn() {
    const imageSlider = document.getElementById(
      'imageSlidIn',
    ) as HTMLInputElement;
    const mainImage = document.getElementById('main-image') as HTMLImageElement;
    const imageSlideIn = document.querySelector('.slider-image-2');
    imageSlider.addEventListener('input', (e: Event) => {
      const imagePositionPercentage: number = +imageSlider.value;
      if (imageSlideIn instanceof HTMLElement) {
        imageSlideIn.style.left = ` ${100 - imagePositionPercentage}%`;

        if (imagePositionPercentage >= 30 && imagePositionPercentage <= 89) {
          const opacityValue = 30 + (99 - imagePositionPercentage);
          mainImage.style.opacity = `0.${opacityValue}`;
        } else if (imagePositionPercentage >= 90) {
          const opacityValue = 30 + (99 - imagePositionPercentage);
          mainImage.style.opacity = `0.0${opacityValue}`;
        } else {
          mainImage.style.opacity = '1';
        }
      }
    });
  }

  initializeCabinetrySlider() {
    new Splide('#cabinetry-slider', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      pagination: false,
      breakpoints: {
        576: {
          perPage: 1,
        },
      },
    }).mount();
  }

  initializeReviewsSlider() {
    new Splide('#reviews-slider', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      pagination: false,
      breakpoints: {
        576: {
          perPage: 1,
        },
      },
    }).mount();
  }
}
