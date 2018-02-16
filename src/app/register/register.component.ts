import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  title = '';
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      isSitter: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthDate: ['', Validators.required],
      area: ['', Validators.required],
      rating: ['', Validators.required]

    });
    console.log(this.registerForm.controls.isSitter);
    
    

  }

  onchange(registerForm) {
    if (registerForm.controls.isSitter.value === true) {
      title = 'Sitter';
    } else {
      title = 'Baby';
    }
  }

  ngOnInit() {
  }

}




