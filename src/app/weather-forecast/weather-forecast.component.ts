import { DatePipe, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { WeatherForecast } from '@app/weather-forecast/models/weather-forecast';
import { WeatherForecastService } from './weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [NgFor, HttpClientModule, DatePipe, MatButtonModule, MatCardModule],
  providers: [WeatherForecastService],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss',
})
export class WeatherForecastComponent implements OnInit {
  title = 'Weather Forecast';
  weatherForecasts: WeatherForecast[] = [];

  constructor(private weatherForecastService: WeatherForecastService) {}

  ngOnInit(): void {
    this.weatherForecastService.getWeatherForecasts().subscribe((forecasts) => {
      this.weatherForecasts = forecasts;
    });
  }
}
