import { UpperCasePipe } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { privateMenuItems, publicMenuItems } from './menu-items';
import { darkModeEnabled } from './menu-features';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    UpperCasePipe,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  privateMenuItems = privateMenuItems;
  publicMenuItems = publicMenuItems;
  darkModeFeatureEnabled = darkModeEnabled;
  darkMode = signal<boolean>(false);
  loggedIn = signal<boolean>(false);

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
}
