import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  opened = true;
  arrow = "keyboard_arrow_left";
  tip = "Close";
  constructor() { }

  ngOnInit(): void {
  }

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.opened);
    this.opened = !this.opened;
    if (!this.opened) {
      this.arrow = "keyboard_arrow_right";
      this.tip = "Open";
    } else {
      this.arrow = "keyboard_arrow_left";
      this.tip = "Close";
    }
  }
}
