import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, ProductDTO } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product?: ProductDTO;
  quantity: number = 1;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productsService.getById(id).subscribe((p) => (this.product = p));
  }

  addToCart(): void {
    if (!this.product) return;
    this.cartService.add({
      productId: this.product.id,
      name: this.product.name,
      price: this.product.price,
      imageUrl: this.product.imageUrl,
      quantity: this.quantity,
    });
  }
}

