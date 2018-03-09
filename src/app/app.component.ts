import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FindAsitter';
  loggedIn;
  constructor(private authService: AuthService) {
    this.loggedIn = this.authService.isLoggedIn;
    // console.log(this.loggedIn);

  }


}
