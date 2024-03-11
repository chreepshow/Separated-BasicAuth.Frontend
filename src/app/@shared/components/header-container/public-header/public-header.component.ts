import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MenuItem } from '@shared/components/header-container/models/menu-item';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent {
  @Input({ required: true }) menuItems!: MenuItem[];
}
