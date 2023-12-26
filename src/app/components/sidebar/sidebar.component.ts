import {Component, OnChanges} from '@angular/core';
import {NbMenuItem, NbMenuService} from "@nebular/theme";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  constructor(private authenticationService: AuthenticationService, private menuService: NbMenuService) {
  }
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
      link: 'login',
    },
  ];
}
