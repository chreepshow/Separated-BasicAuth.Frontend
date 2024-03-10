import { MenuItem } from './models/menu-item';

export const publicMenuItems: MenuItem[] = [
  {
    title: $localize`:@@MENU_ITEM_TITLE__LOG_IN:Login`,
    path: '/login',
  },
  {
    title: $localize`:@@MENU_ITEM_TITLE__SING_UP:Sign up`,
    path: '/signup',
  },
];

export const privateMenuItems: MenuItem[] = [
  {
    title: $localize`:@@MENU_ITEM_TITLE__BROWSE:Browse`,
    path: '/home',
  },
  {
    title: $localize`:@@MENU_ITEM_TITLE__WEATHER:Weather`,
    path: '/weather',
  },
];
