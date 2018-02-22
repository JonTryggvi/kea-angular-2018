import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validator } from '../enteties/validate';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myValidator = new Validator();
  registerForm: FormGroup;
  registerFormTitle = 'Baby Form';

  theIputFixed;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      isSitter: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthDate: ['1980-01-01', Validators.required],
      area: ['', Validators.required],
      rating: [1, Validators.required]

    });

  }
// get the blur event with the input name
  sendBlur(theInput) {
    this.myValidator.checkforblur(theInput, this.registerForm);
    // console.log(this.myValidator.spanClass_firstname);
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
