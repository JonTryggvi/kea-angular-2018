import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { UsersActions } from '../../users.actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { Baby } from '../../enteties/baby';
import { Sitter } from '../../enteties/sitter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // myValidator = new Validator();
  registerForm: FormGroup;
  registerFormTitle = 'Baby Form';
  private isBaby: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private router: Router,
    private usersActions: UsersActions,
    private ngRedux: NgRedux<IAppState>) {
    this.registerForm = this.fb.group({
      isSitter: [false],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthDate: ['1980-01-01', Validators.required],
      area: ['', Validators.required],
      rating: [ [] , Validators.required],
      gender: ['', Validators.required],
      rate: ['', Validators.required],
      username: [''],
      password: [''],
      password2: ['']
    });

  }
// get the blur event with the input name

  onSubmit(form) {
    // console.log(form.value);
    if (!this.registerForm.value.isSitter) {
      // this.data.addBaby(form.value);
      const baby: Baby = form.value as Baby;
      this.usersActions.createBaby(baby);
    } else {
      // this.data.addSitter(form.value);
      const sitter: Sitter = form.value as Sitter;
      this.usersActions.createSitter(sitter);
    }

    this.router.navigate(['/portal/users-list']);
  }

// get the change event and update the DOM title
  onChange() {
    if (this.registerForm.value.isSitter) {
      this.registerFormTitle = 'Sitter Form';
    } else {
      this.registerFormTitle = 'Baby Form';
    }
    // console.log(this.registerForm);
  }
  ngOnInit() {
    this.ngRedux.select(state => state.users).subscribe(res => {
      // console.log('res', res.babies);
      this.isBaby = res.isBaby;
    });
  }
}
