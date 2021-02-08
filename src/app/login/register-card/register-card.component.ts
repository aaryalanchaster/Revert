import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<boolean>();
  emailAdd = 'temp@gmail.com';
  password = 'temp@123';
  email = '';
  passwd = '';
  isloggedIn = false;
  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onValidate() {
    console.log(this.email, this.passwd);
    if (this.email == this.emailAdd && this.passwd == this.password) {
      console.log(this.email, this.passwd);
      this.isloggedIn = true;
      // this.router.navigate[("/nav")]
    } else {
      this.openSnackBar()
      this.isloggedIn = false;
    }
    console.log('login', this.isloggedIn);
    this.loginEvent.emit(this.isloggedIn);
  }
  openSnackBar() {
    this._snackbar.open('Invalid Login', 'Retry', {
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}