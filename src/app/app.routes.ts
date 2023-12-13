import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('../app/features/store/routes/product.routes').then(
        (m) => m.productsRoutes
      ),
  },
  { path: '**', redirectTo: 'products' },
];
