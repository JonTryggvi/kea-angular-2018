import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  showLogin;
  loggedIn;
  constructor(private router: Router, private authService: AuthService) {



  }

  logOut() {
    this.authService.logout();
    console.log(this.authService.isLoggedIn);

    // location.reload();
    this.router.navigate(['/home/login']);
  }
  isLogged() {
    if (this.authService.isLoggedIn) {
      return true;
    }
    return false;
  }
  isAdmin() {
    if (this.authService.isAdmin) {
      return true;
    }
    return false;
  }

  ngOnInit() {
    // this.loggedIn = this.authService.isLoggedIn;
    // this.showLogin = this.authService.isLoggedIn;
    // console.log(this.loggedIn);
  }

}
