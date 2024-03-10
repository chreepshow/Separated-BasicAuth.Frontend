import { UpperCasePipe } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { menuItems } from './menu-items';
import { darkModeEnabled } from './menu-features';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, UpperCasePipe, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems = menuItems;
  darkModeFeatureEnabled = darkModeEnabled;
  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }
}
