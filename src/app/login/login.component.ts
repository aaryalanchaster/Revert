import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isloggedIn!: boolean;
  type!:string
  loginConfirmation($event: any) {
    console.log('event '+$event[1])
    this.isloggedIn = $event[0];
    this.type = $event[1];
    console.log('app:', this.isloggedIn);
    if (this.type === 'customer') {
      this.router.navigate(['/dashboard/Consumer-home']);
    }
    else if (this.type === 'trader') {
      this.router.navigate(['/dashboard/Trader-home']);

    }
    else if (this.type === 'farmer') {
      this.router.navigate(['/dashboard/Producer-home']);

    }
    else {
      this.router.navigate(['/dashboard/Company-home']);

    }

  }
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
