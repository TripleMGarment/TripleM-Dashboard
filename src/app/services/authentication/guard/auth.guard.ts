import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import {ToastrService} from "../../toastr/toastr.service";
import {ToastrConstants} from "../../../constants/toastr-constants";
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthenticationService,
              public router: Router,
              private toastrService: ToastrService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (!this.authService.isAuthenticated()) {
      this.toastrService.showWarningToast(ToastrConstants.toastrWarningMessage.authRequired);
      this.router.navigate(['login']);
    }
    return true;
  }
}
