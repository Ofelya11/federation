import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  hide_con = true;
  button_name = 'hide';
  constructor(
    private router: Router,
  ) { }


  ngOnInit(): void {
    console.log(11111);
  }

  backTo(){
    this.router.navigate(['/login']);
  }

}
