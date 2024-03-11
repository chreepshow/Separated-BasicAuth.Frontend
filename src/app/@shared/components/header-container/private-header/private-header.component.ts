import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MenuItem } from '@shared/components/header-container/models/menu-item';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
})
export class PrivateHeaderComponent {
  @Input({ required: true }) menuItems!: MenuItem[];
}
