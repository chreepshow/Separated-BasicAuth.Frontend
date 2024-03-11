import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: $localize`:@@LANDING__TITLE:Our project`,
    loadComponent: () =>
      import('@app/landing/landing.component').then((m) => m.LandingComponent),
  },
  {
    path: 'login',
    title: $localize`:@@LOGIN__TITLE:Login page`,
    loadComponent: () =>
      import('@core/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'signup',
    title: $localize`:@@SIGN_UP__TITLE:Sign up page`,
    loadComponent: () =>
      import('@core/auth/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent,
      ),
  },
  {
    path: 'home',
    title: $localize`:@@HOME__TITLE:Home page`,
    loadComponent: () =>
      import('@app/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'weather',
    title: $localize`:@@WEATHER__TITLE:Weather page`,
    loadComponent: () =>
      import('@app/weather-forecast/weather-forecast.component').then(
        (m) => m.WeatherForecastComponent,
      ),
  },
];
