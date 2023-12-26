import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ImageConstants} from "../../constants/image-constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm: FormGroup
  constructor(public authenticationService: AuthenticationService, private fb: FormBuilder, private router : Router) {
    this.signUpForm = this.fb.group({
      userEmail: new FormControl(""),
      userPassword: new FormControl(""),
    });
  }

  signup() {
    this.authenticationService.Register(this.signUpForm.get('userEmail')?.value, this.signUpForm.get('userPassword')?.value).then(signedUp => {
      if (signedUp) this.router.navigate(['/login'])
    })
  }

  protected readonly ImageConstants = ImageConstants;
}
