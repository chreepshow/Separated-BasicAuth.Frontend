import { Component, Input, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MenuItem } from '@shared/components/header-container/models/menu-item';
import { UserModel } from '@app/@core/auth/models/user-model';
import { AuthService } from '@app/@core/auth/auth.service';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
})
export class PrivateHeaderComponent {
  @Input({ required: true }) menuItems!: MenuItem[];
  authService = inject(AuthService);
  router = inject(Router);

  onLogout() {
    this.authService.removeUserFromLocalStorage();
    this.authService.currentUserSig.set(null);
    this.router.navigate(['/']);
  }
}
