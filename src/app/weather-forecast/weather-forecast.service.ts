import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherForecast } from '@app/weather-forecast/models/weather-forecast';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  readonly path = 'WeatherForecast';

  constructor(private http: HttpClient) {}

  public getWeatherForecasts(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(
      `${environment.apiUrl}/${this.path}`,
    );
  }
}
