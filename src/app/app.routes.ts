import { Routes } from '@angular/router';
import { HomePageComponent } from './features/landing/pages/home-page/home-page.component';
import { ProductsPageComponent } from './features/products/products-page/products-page.component';
import { AllCabinetsComponent } from './features/landing/components/all-cabinets/all-cabinets.component';
import { ExpressCabinetsComponent } from './features/landing/components/express-cabinets/express-cabinets.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
];
