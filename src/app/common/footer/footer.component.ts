import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today = new Date();
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'yyyy', 'en-US', '+0530');
    console.log(this.jstoday);
  }

  ngOnInit(): void {
  }

}
