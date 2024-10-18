
import { MenuItem } from '../models/menu/menu-item.model';

export const NAVBAR: MenuItem[] = [
  {
    title: 'HOME',
    url:'home'
  },
  {
    title: 'ABOUT US',
    url: 'about-us',
  },
  {
    title: 'CAKES',
    url: 'cakes',
  },
  {
    title: 'PASTRIES',
    url: 'pastries',
    // children: [
    //   {
    //     title: 'Configuration',
    //     url: 'configuration-settings',
    //   },
    //   {
    //     title: 'Notifications overview',
    //     url: 'notifications',
    //   },
    //   {
    //     title: 'User settings',
    //     url: 'user-settings',
    //   },
    // ],
  },
];
