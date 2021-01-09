import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<boolean>();
  emailAdd = 'temp@gmail.com';
  password = 'temp@123';
  email = '';
  passwd = '';
  isloggedIn = false;
  ngOnInit(): void {}

  onValidate() {
    console.log(this.email, this.passwd);
    if (this.email == this.emailAdd && this.passwd == this.password) {
      console.log(this.email, this.passwd);
      this.isloggedIn = true;
      // this.router.navigate[("/nav")]
    } else {
      this.isloggedIn = false;
    }
    console.log('login', this.isloggedIn);
    this.loginEvent.emit(this.isloggedIn);
  }
}
