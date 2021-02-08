import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  name: string;
  contact: string;

}

@Component({
  selector: 'app-tx',
  templateUrl: './tx.component.html',
  styleUrls: ['./tx.component.css']
})
export class TxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
