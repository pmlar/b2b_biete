import { Component } from '@angular/core';
import { AuthService, UserDTO } from '../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  user: UserDTO | null = null;

  constructor(private readonly auth: AuthService) {}

  ionViewWillEnter(): void {
    this.auth.currentUser$.subscribe((u) => (this.user = u));
  }
}

