import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CategoryDTO {
  id: string;
  name: string;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private readonly categories: CategoryDTO[] = [
    { id: 'c1', name: 'Algodón', imageUrl: 'assets/mock/c1.jpg' },
    { id: 'c2', name: 'Merino', imageUrl: 'assets/mock/c2.jpg' },
    { id: 'c3', name: 'Acrílico', imageUrl: 'assets/mock/c3.jpg' },
  ];

  getAll(): Observable<CategoryDTO[]> {
    return of(this.categories);
  }
}

