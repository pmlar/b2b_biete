import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  submit(): void {
    this.auth.login(this.email, this.password).subscribe(() => {
      this.router.navigate(['/account']);
    });
  }
}

