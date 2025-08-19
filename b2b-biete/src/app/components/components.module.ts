import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { FooterTabsComponent } from './footer-tabs/footer-tabs.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    CategoryCardComponent,
    HeaderToolbarComponent,
    FooterTabsComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    ProductCardComponent,
    CategoryCardComponent,
    HeaderToolbarComponent,
    FooterTabsComponent,
  ],
})
export class ComponentsModule {}

