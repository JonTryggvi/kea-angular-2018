import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      isSitter: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthDate: ['', Validators.required],
      area: ['', Validators.required],
      rating: ['', Validators.required]

    });
  } 

  ngOnInit() {
  }

}
