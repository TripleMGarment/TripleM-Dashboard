import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(public authenticationService: AuthenticationService) {
  }
}
