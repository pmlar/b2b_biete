import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage {
  categoryId: string = '';
  products: any[] = [];

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {}

  ionViewWillEnter(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';
    this.data.getCategoryProducts(this.categoryId).subscribe((ps: any[]) => this.products = ps);
  }

  openProduct(id: string): void {
    this.router.navigate(['/product', id]);
  }
}
