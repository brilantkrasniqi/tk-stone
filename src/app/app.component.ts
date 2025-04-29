import { Component } from '@angular/core';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponentComponent } from './shared/layout/footer-component/footer-component.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
