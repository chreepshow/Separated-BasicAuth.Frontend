import { Route } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { WeatherForecastComponent } from '@app/weather-forecast/weather-forecast.component';
import { LoginComponent } from '@app/login/login.component';
import { SignUpComponent } from '@app/sign-up/sign-up.component';
import { HomeComponent } from '@app/home/home.component';

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
      {
        path: 'home',
        title: $localize`:@@HOME__TITLE:Home page`,
        component: HomeComponent,
      },
      {
        path: 'login',
        title: $localize`:@@LOGIN__TITLE:Login page`,
        component: LoginComponent,
      },
      {
        path: 'signup',
        title: $localize`:@@SIGN_UP__TITLE:Sign up page`,
        component: SignUpComponent,
      },
    ],
  },
];
