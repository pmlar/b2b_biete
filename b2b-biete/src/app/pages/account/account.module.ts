import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { AccountPage } from './account.page';

const routes: Routes = [
  { path: '', component: AccountPage },
];

@NgModule({
  declarations: [AccountPage],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
})
export class AccountPageModule {}

