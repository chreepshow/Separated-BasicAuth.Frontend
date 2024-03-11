import { Component, HostBinding, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { privateMenuItems, publicMenuItems } from './consts/menu-items';
import { darkModeEnabled } from './consts/menu-features';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PrivateHeaderComponent } from './private-header/private-header.component';

@Component({
  selector: 'app-header-container',
  standalone: true,
  templateUrl: './header-container.component.html',
  styleUrl: './header-container.component.scss',
  imports: [
    PublicHeaderComponent,
    PrivateHeaderComponent,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
})
export class HeaderContainerComponent {
  privateMenuItems = privateMenuItems;
  publicMenuItems = publicMenuItems;
  darkModeFeatureEnabled = darkModeEnabled;
  darkMode = signal<boolean>(false);
  loggedIn = signal<boolean>(false);

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
}
