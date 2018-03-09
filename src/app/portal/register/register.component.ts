import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // myValidator = new Validator();
  registerForm: FormGroup;
  registerFormTitle = 'Baby Form';

  constructor(private fb: FormBuilder, private data: DataService, private router: Router) {
    this.registerForm = this.fb.group({
      isSitter: [false],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthDate: ['1980-01-01', Validators.required],
      area: ['', Validators.required],
      rating: [1, Validators.required],
      gender: ['', Validators.required],
      rate: ['', Validators.required],
      username: [''],
      password: [''],
      password2: ['']
    });

  }
// get the blur event with the input name

  onSubmit(form) {
    console.log(form.value);
    if (!this.registerForm.value.isSitter) {
      this.data.addBaby(form.value);
    } else {
      this.data.addSitter(form.value);
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
  }
}
