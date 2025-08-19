import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getHome(): Observable<any> {
    return this.http.get('/assets/mocks/home.json');
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('/assets/mocks/categories.json');
  }

  getCategoryProducts(categoryId: string): Observable<any[]> {
    return this.http.get<any[]>('/assets/mocks/products.json').pipe(
      map(products => products.filter(p => p.categoryId === categoryId))
    );
  }

  getProduct(productId: string): Observable<any> {
    return this.http.get<any[]>('/assets/mocks/products.json').pipe(
      map(products => products.find(p => p.id === productId))
    );
  }
}
