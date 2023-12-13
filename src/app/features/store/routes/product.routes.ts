import { Routes } from '@angular/router';
import { ProductsComponent } from '../../../core/components/products/products.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full',
  },
];
