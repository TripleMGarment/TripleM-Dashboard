import {inject, Injectable, NgZone} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  User
} from '@angular/fire/auth';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  UserData : any;
  constructor(
    private auth: Auth, private router : Router, public ngZone: NgZone
  ) {
    onAuthStateChanged(this.auth,(user: any)=>{
      if(user){
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

  // Sign up with email/password
  Register(email : string, password : string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        this.UserData = result.user;
        this.ngZone.run(() => {
          /* Call the SendVerificaitonMail() function when new user sign
       up and returns promise */
          this.sendEmailVerification();
          return true;
        });
      })
      .catch((error) => {
        window.alert(error.message);
        return false;
      });
  }

  sendEmailVerification(){
    return sendEmailVerification(this.auth.currentUser as User );
  }

  // Sign in with email/password
  Login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        return true;
      })
      .catch((error) => {
        return false;
      });
  }

  isAuthenticated() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user == null) {
      return false;
    } else {
      return true;
    }
  }

  Logout() {
    localStorage.setItem('user', 'null');
    JSON.parse(localStorage.getItem('user')!);
    signOut(this.auth).then(()=>this.router.navigate(['/login']))
  }
}
