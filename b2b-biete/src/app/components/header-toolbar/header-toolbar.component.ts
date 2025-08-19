import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent {
  @Input() title: string = '';
  @Output() search = new EventEmitter<string>();
  query: string = '';
  cartCount: number = 0;

  constructor(private readonly cart: CartService) {
    this.cart.cart$.subscribe((items) => {
      this.cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
    });
  }

  onSearchChange(event: any): void {
    this.query = event?.detail?.value ?? '';
    this.search.emit(this.query);
  }
}

