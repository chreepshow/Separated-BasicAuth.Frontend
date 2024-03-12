import { Injectable, signal } from '@angular/core';
import { UserModel } from './models/user-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly path = 'WeatherForecast';
  currentUserSig = signal<UserModel | undefined | null>(undefined);

  constructor(private http: HttpClient) {}

  getUserFromLocalStorage(): UserModel | undefined | null {
    const accessToken = localStorage.getItem('accessToken');
    const expiresIn = localStorage.getItem('expiresIn');
    const refreshToken = localStorage.getItem('refreshToken');
    const email = localStorage.getItem('email');
    if (email && accessToken) {
      return {
        accessToken,
        expiresIn: Number(expiresIn),
        refreshToken: refreshToken ?? '',
        email,
        role: '',
      };
    }
    return null;
  }

  removeUserFromLocalStorage() {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('expiresIn', '');
    localStorage.setItem('refreshToken', '');
    localStorage.setItem('email', '');
  }
}
