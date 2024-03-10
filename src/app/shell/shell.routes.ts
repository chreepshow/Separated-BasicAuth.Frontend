import { Route } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { WeatherForecastComponent } from '@app/weather-forecast/weather-forecast.component';

export const shellRoutes: Route[] = [
  {
    path: '',
    title: $localize`:@@SHELL__TITLE:Home page`,
    component: ShellComponent,
    children: [
      {
        path: 'weather',
        title: $localize`:@@WEATHER__TITLE:Weather page`,
        component: WeatherForecastComponent,
      },
    ],
  },
];
