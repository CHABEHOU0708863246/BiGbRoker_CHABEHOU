import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';

import { ProductItemComponent } from '../product-item/product-item.component';
import { productActions } from '../../../features/store/product.actions';
import { selectProducts } from '../../../features/store/product.reducer';
import { ProductState } from '../../models/productState';
import { Task } from '../../models/task';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatSliderModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        FormsModule,
        ProductItemComponent,
        SidebarComponent
    ]
})
export class ProductsComponent {
  products$ = this.store.select(selectProducts);

  sidnavOpened = true;

  slectedLength: number = 3;

  constructor(private store: Store<{ product: ProductState }>) {}

  ngOnInit(): void {
    this.store.dispatch(productActions.getProductsRequest());
  }


  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  updateComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  openSidebar() {
    this.sidnavOpened = !this.sidnavOpened;
  }
}
