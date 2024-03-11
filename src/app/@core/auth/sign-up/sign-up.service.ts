import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { SignUpModel } from './models/sign-up-model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  readonly path = 'register';

  constructor(private http: HttpClient) {}

  public signUpUser(user: SignUpModel): Observable<void> {
    return this.http.post<void>(`${environment.baseUrl}/${this.path}`, user);
  }
}
