import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(public authenticationService: AuthenticationService) {
  }
}
