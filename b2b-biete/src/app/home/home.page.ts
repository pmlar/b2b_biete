import { Component } from '@angular/core';
import { CategoriesService, CategoryDTO } from '../services/categories.service';
import { ProductsService, ProductDTO } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  categories: CategoryDTO[] = [];
  featured: ProductDTO[] = [];

  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly productsService: ProductsService,
    private readonly router: Router
  ) {}

  ionViewWillEnter(): void {
    this.categoriesService.getAll().subscribe(c => (this.categories = c));
    this.productsService.getAll().subscribe(p => (this.featured = p));
  }

  goToCategory(category: CategoryDTO): void {
    this.router.navigate(['/categories'], { queryParams: { id: category.id } });
  }

  addToCart(product: ProductDTO): void {
    // Will be wired in CartPage using shared CartService; left minimal here
  }
}
