import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { QuantityStepperComponent } from '../components/quantity-stepper/quantity-stepper.component';
import { FiltersDrawerComponent } from '../components/filters-drawer/filters-drawer.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    ProductCardComponent,
    QuantityStepperComponent,
    FiltersDrawerComponent,
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    ProductCardComponent,
    QuantityStepperComponent,
    FiltersDrawerComponent,
  ]
})
export class SharedModule {}

