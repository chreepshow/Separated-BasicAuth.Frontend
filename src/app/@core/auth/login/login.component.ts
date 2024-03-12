import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';

import { SnackBarService } from '@app/@shared/services/snack-bar.service';
import { SignUpService } from '../sign-up/sign-up.service';
import { AuthService } from '../auth.service';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [SignUpService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  signUpService = inject(SignUpService);
  snackBarService = inject(SnackBarService);
  router = inject(Router);
  authService = inject(AuthService);

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.signUpService
        .loginUser({
          email: this.loginForm.value.email!,
          password: this.loginForm.value.password!,
        })
        .subscribe((result) => {
          const user: UserModel = {
            ...result,
            email: this.loginForm.value.email!,
          };
          localStorage.setItem('accessToken', user.accessToken);
          localStorage.setItem('accessToken', user.accessToken);
          localStorage.setItem('expiresIn', user.expiresIn.toString());
          localStorage.setItem('refreshToken', user.refreshToken);
          localStorage.setItem('email', user.email);
          console.log(user);
          this.authService.currentUserSig.set(user);
          console.log(this.authService.currentUserSig());
          this.router.navigate(['/home']);
        });
    }
  }
}
