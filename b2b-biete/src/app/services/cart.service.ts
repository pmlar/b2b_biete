import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly items$ = new BehaviorSubject<CartItem[]>([]);

  get cart$() {
    return this.items$.asObservable();
  }

  add(item: CartItem): void {
    const current = this.items$.value;
    const existingIndex = current.findIndex(ci => ci.productId === item.productId);
    if (existingIndex >= 0) {
      const updated = [...current];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + item.quantity,
      };
      this.items$.next(updated);
    } else {
      this.items$.next([...current, item]);
    }
  }

  remove(productId: string): void {
    this.items$.next(this.items$.value.filter(i => i.productId !== productId));
  }

  clear(): void {
    this.items$.next([]);
  }
}

