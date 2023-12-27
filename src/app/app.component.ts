import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";
import {AuthenticationService} from "./services/authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tripleMDashboard';
  hideSidebar: boolean = false;
  isLogged: boolean = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.router.events.subscribe(data => {
      if (data instanceof RoutesRecognized) {
        const { showSidebar } = data?.state?.root?.firstChild?.data as {
          showSidebar?: boolean;
        };
        this.hideSidebar = showSidebar === undefined ? true : showSidebar;
      }
      this.isLogged = this.authenticationService.isAuthenticated();
    });
  }
}
