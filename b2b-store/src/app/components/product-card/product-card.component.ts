import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent  {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() price: number = 0;
}
