import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuStatus = false;

  openMenu(event: Event) {
    event.stopPropagation();
    const navMenu = document.querySelector<HTMLUListElement>('.nav-menu');
    if (this.menuStatus === false) {
      navMenu?.classList.add('nav-active');
      this.menuStatus = !this.menuStatus;
    } else {
      navMenu?.classList.remove('nav-active');
      this.menuStatus = !this.menuStatus;
    }
    document.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target !== navMenu && !navMenu?.contains(e.target as Node)) {
        navMenu?.classList.remove('nav-active');
        this.menuStatus = false;
      }
    });
  }
  openSearchBar(e: Event) {
    e.stopPropagation();
    const mobileSearchBar = document.querySelector<HTMLInputElement>(
      '.search-mobile-active',
    );
    mobileSearchBar?.focus();
  }
}
