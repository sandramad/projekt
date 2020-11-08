import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  action = 0;
  constructor() { }

  ngOnInit(): void {
    
  }
goLogin() {
  this.action = 1;
}
goRegister() {
  this.action = 2;
}
}
