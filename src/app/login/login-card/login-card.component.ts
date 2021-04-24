import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  @Output() loginEvent = new EventEmitter<any>();
  emailAdd = 'temp@gmail.com';
  password = 'temp@123';
  email = '';
  passwd = '';
  selectedValue='';
  isloggedIn = false;
  ngOnInit(): void { }
  constructor(private _snackbar: MatSnackBar) { }
  onValidate() {
    console.log(this.email, this.passwd);
    if (this.email == this.emailAdd && this.passwd == this.password) {
      console.log(this.email, this.passwd,this.selectedValue);
      this.isloggedIn = true;
      // this.router.navigate(['/dashboard/home'], { relativeTo: this.route });
      // this.router.navigate[("/nav")]
      this.loginEvent.emit([this.isloggedIn,this.selectedValue]);
    } else {
      this.openSnackBar()
      this.isloggedIn = false;
    }
    console.log('login', this.isloggedIn);
    
  }
  openSnackBar() {
    this._snackbar.open('Invalid Login', 'Retry', {
      duration: 500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  // selectedValue(event: MatSelectChange) {
  //     this.selectedData = {
  //     value: event.value,
  //     text: event.source.triggerValue
  //   };
  //   console.log(this.selectedData);
  // }


}
