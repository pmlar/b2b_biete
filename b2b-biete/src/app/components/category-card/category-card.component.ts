import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Output() selected = new EventEmitter<Category>();

  onClick(): void {
    this.selected.emit(this.category);
  }
}

