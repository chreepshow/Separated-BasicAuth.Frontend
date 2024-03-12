import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { SignUpModel } from './models/sign-up-model';
import { LoginModel } from '../login/models/sign-up-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  signUpUser(user: SignUpModel): Observable<void> {
    return this.http.post<void>(`${environment.baseUrl}/register`, user);
  }

  loginUser(user: LoginModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.baseUrl}/login`, user);
  }
}
