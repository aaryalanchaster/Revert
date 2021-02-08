import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  name: string;
  contact: string;

}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
