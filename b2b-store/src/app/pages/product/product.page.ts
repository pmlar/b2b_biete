import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage {
  product: any;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ionViewWillEnter(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.data.getProduct(id).subscribe((p: any) => this.product = p);
  }
}
