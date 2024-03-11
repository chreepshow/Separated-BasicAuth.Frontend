import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import { SignUpService } from './sign-up.service';
import { SnackBarService } from '@app/@shared/services/snack-bar.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [SignUpService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  fb = inject(FormBuilder);
  signUpService = inject(SignUpService);
  snackBarService = inject(SnackBarService);
  router = inject(Router);

  signUpForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.signUpService
        .signUpUser({
          email: this.signUpForm.value.email!,
          password: this.signUpForm.value.password!,
        })
        .subscribe(() => {
          this.snackBarService.openSnackBar(
            $localize`:@@SIGN_UP_SUCCESS__SNACK_MSG:Account successfully created!`,
          );
          this.router.navigate(['/login']);
        });
    }
  }
}
