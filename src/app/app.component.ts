import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherForecastComponent],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'BasicAuth.Frontend';
}
