import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  contact: string;

}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
