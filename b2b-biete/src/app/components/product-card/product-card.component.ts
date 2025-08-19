import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sku?: string;
  brand?: string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() showPrice: boolean = true;
  @Input() showAddToCart: boolean = true;
  @Output() addToCart = new EventEmitter<Product>();

  onAddToCartClicked(): void {
    if (this.product) {
      this.addToCart.emit(this.product);
    }
  }
}

