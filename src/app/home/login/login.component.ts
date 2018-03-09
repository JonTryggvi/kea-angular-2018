import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../enteties/password';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAdmin: boolean;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  onSubmit(loginForm) {
    // console.log(loginForm.valid);
    if (loginForm.valid) {
      // Send an http request to login
      // Navigate to the home page (or some other page)
      this.isAdmin = this.loginForm.controls.admin.value;
      this.authService.login(this.isAdmin).subscribe(x => {
        // Can you naviate to the path the user tried to go to instead of
        // always the contact?
        // this.authService.isAdmin = this.loginForm.controls.admin.value;
        if (!this.isAdmin) {
          this.router.navigate(['portal/register']);
        } else {
          this.router.navigate(['portal/users-list']);
        }
      });

    } else {
      // display error messages
    }
  }


  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['',
        Validators.compose([
          Validators.required,
          PasswordValidator.getPasswordValidator()
        ]
        )],
      admin: [false]
    });
    // console.log(this.loginForm);

  }
}
