import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.css',
})
export class FooterComponentComponent {}
