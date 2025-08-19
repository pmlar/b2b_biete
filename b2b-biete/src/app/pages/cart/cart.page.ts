import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  items: CartItem[] = [];

  constructor(private readonly cart: CartService, private readonly router: Router) {}

  ionViewWillEnter(): void {
    this.cart.cart$.subscribe((items) => (this.items = items));
  }

  remove(productId: string): void {
    this.cart.remove(productId);
  }

  total(): number {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  goCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}

