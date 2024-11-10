import {Component, OnChanges} from '@angular/core';
import {NbMenuItem, NbMenuService} from "@nebular/theme";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import { ImageConstants } from 'src/app/constants/image-constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  constructor(private authenticationService: AuthenticationService, private menuService: NbMenuService) {
  }
  protected readonly ImageConstants = ImageConstants;
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
      title: 'Stock Management',
      icon: { icon: 'book-open-outline', pack: 'eva' },
      link: 'stock-management'
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: 'login',
    },
  ];
}
