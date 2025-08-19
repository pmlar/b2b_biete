import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  address: string = '';
  company: string = '';
  vat: string = '';

  constructor(private readonly router: Router) {}

  confirm(): void {
    this.router.navigate(['/home']);
  }
}

