import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './product.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  { path: '', component: ProductPage },
];

@NgModule({
  declarations: [ProductPage],
  imports: [CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class ProductPageModule {}

