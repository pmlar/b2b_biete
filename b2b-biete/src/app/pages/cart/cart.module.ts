import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CartPage } from './cart.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  { path: '', component: CartPage },
];

@NgModule({
  declarations: [CartPage],
  imports: [CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class CartPageModule {}

