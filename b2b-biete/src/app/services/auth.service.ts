import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface UserDTO {
  id: string;
  email: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly user$ = new BehaviorSubject<UserDTO | null>(null);

  get currentUser$() {
    return this.user$.asObservable();
  }

  login(email: string, password: string): Observable<UserDTO> {
    const mock: UserDTO = { id: 'u1', email, name: 'Cliente B2B' };
    this.user$.next(mock);
    return of(mock);
  }

  logout(): void {
    this.user$.next(null);
  }
}

