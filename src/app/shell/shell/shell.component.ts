import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LandingComponent } from '../../landing/landing.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LandingComponent],
})
export class ShellComponent {
  loggedIn = signal<boolean>(false);
}
