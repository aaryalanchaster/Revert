import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isloggedIn!: boolean;
  loginConfirmation($event: boolean) {
    this.isloggedIn = $event;
    console.log('app:', this.isloggedIn);
    this.router.navigate(['/dashboard/home']);

  }
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
