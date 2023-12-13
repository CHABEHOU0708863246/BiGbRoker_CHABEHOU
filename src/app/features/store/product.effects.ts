import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { productActions } from './product.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProductsService } from '../../core/services/products/products.service';

export const getProducts$ = createEffect(
  (actions$ = inject(Actions), productService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(productActions.getProductsRequest),
      switchMap(() =>
        productService.getProducts().pipe(
          map((products) => productActions.getProductsSuccess({ products })),
          catchError((error) =>
            of(productActions.getProductsFailure({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);
