import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
