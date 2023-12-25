import { Component } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: 'dashboard'
    },
    {
      title: 'Parties',
      icon: 'people-outline',
      link: 'parties'
    },
    {
      title: 'Orders',
      icon: { icon: 'shopping-bag-outline', pack: 'eva' },
      link: 'orders'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: 'logout'
    },
  ];
}
