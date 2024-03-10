import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@app/shell/shell.routes').then((m) => m.shellRoutes),
  },
];
