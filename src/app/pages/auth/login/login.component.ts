import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  eye = true;

  loginForm: FormGroup = new FormGroup(
    {
      email : new FormControl(''),
      password : new FormControl(''),
    }
  );
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  look(){
    this.eye = !this.eye
  }

  moveTo(){
    this.router.navigate(['/register']);
  }

  getValue(){
    console.log(this.loginForm.get('email')?.value);
  }

}
