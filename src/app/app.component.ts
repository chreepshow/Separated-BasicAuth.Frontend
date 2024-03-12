import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './@shared/components/footer/footer.component';

import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { HeaderContainerComponent } from './@shared/components/header-container/header-container.component';
import { AuthService } from './@core/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    WeatherForecastComponent,
    FooterComponent,
    HeaderContainerComponent,
  ],
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.currentUserSig.set(
      this.authService.getUserFromLocalStorage(),
    );
  }
}
