import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: Product;
}
