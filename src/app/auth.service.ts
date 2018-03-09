import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
@Injectable()
export class AuthService {
  isLocalLogSet = localStorage.loggedIn;
  isLoggedIn = (typeof this.isLocalLogSet !== 'undefined' && this.isLocalLogSet !== null) ? JSON.parse(this.isLocalLogSet) : false;

  isLocalAdmSet = localStorage.admin;
  isAdmin = (typeof this.isLocalAdmSet !== 'undefined' && this.isLocalAdmSet !== null) ? JSON.parse(this.isLocalAdmSet) : false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  // console.log(this.isLoggedIn);

  login(checkForAdmin: boolean): Observable<boolean> {


    // dummy implementation to set the user to be logged in.
    console.log('login called');
    return Observable.of(true).delay(1000).do(val => {
      console.log('changed it to true');
      this.isLoggedIn = true;
      this.isAdmin = checkForAdmin;
      console.log('is admin ' + this.isAdmin);
      localStorage.setItem('loggedIn', JSON.stringify(this.isLoggedIn));
      localStorage.setItem('admin', JSON.stringify(checkForAdmin));
      // location.reload();
    });

  }

  logout(): void {
    console.log(this.isLoggedIn);
    this.isLoggedIn = false;
    this.isAdmin = false;
    localStorage.setItem('loggedIn', JSON.stringify(this.isLoggedIn));
    localStorage.setItem('admin', JSON.stringify(this.isAdmin));
  }

}
