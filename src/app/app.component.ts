import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isloggedIn!: boolean;
  loginConfirmation($event: boolean) {
    this.isloggedIn = $event;
    console.log('app:', this.isloggedIn);
  }
  title = 'retrovert-ver1';
}
