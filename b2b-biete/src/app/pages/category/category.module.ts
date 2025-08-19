import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPage } from './category.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  { path: '', component: CategoryPage },
];

@NgModule({
  declarations: [CategoryPage],
  imports: [CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class CategoryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPage } from './category.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  { path: '', component: CategoryPage },
];

@NgModule({
  declarations: [CategoryPage],
  imports: [CommonModule, FormsModule, IonicModule, ComponentsModule, RouterModule.forChild(routes)],
})
export class CategoryPageModule {}

