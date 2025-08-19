import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, CategoryDTO } from '../../services/categories.service';
import { ProductsService, ProductDTO } from '../../services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categoryId: string | null = null;
  categories: CategoryDTO[] = [];
  products: ProductDTO[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly categoriesService: CategoriesService,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.categoryId = params.get('id');
      this.loadData();
    });
  }

  private loadData(): void {
    this.categoriesService.getAll().subscribe((cs) => (this.categories = cs));
    if (this.categoryId) {
      this.productsService.getByCategory(this.categoryId).subscribe((ps) => (this.products = ps));
    } else {
      this.productsService.getAll().subscribe((ps) => (this.products = ps));
    }
  }

  openProduct(p: ProductDTO): void {
    this.router.navigate(['/product', p.id]);
  }
}

