import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ProductDTO {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sku?: string;
  brand?: string;
  categoryId?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly products: ProductDTO[] = [
    {
      id: 'p1',
      name: 'Ovillo Algodón 100g',
      price: 3.5,
      imageUrl: 'assets/mock/p1.jpg',
      sku: 'ALG-100',
      brand: 'Biete',
      categoryId: 'c1',
    },
    {
      id: 'p2',
      name: 'Ovillo Lana Merino 50g',
      price: 4.9,
      imageUrl: 'assets/mock/p2.jpg',
      sku: 'MER-050',
      brand: 'Biete',
      categoryId: 'c2',
    },
  ];

  getAll(): Observable<ProductDTO[]> {
    return of(this.products);
  }

  getByCategory(categoryId: string): Observable<ProductDTO[]> {
    return of(this.products.filter(p => p.categoryId === categoryId));
  }

  getById(id: string): Observable<ProductDTO | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}

