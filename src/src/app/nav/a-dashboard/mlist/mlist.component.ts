
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{
  name: string;
  contact: string;
  
}


@Component({
  selector: 'app-mlist',
  templateUrl: './mlist.component.html',
  styleUrls: ['./mlist.component.css']
})
export class MlistComponent{

  constructor(public dialog:MatDialog) {}
  
  // open-member
   openDialogMember(): void {
    const dialogRef = this.dialog.open(MListNewMember, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   }

  //open-Tx 
  openDialogTx(): void {
    const dialogRef = this.dialog.open(MListNewTx, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  
  // open-request
  openDialogRequest(): void {
    const dialogRef = this.dialog.open(MListNewRequest, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }


  // open-product
  openDialogProduct(): void {
    const dialogRef = this.dialog.open(MListNewProduct, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}


// Tx-Component
@Component({
  selector: 'app-mlist-new-tx',
  templateUrl: './mlist-new-tx.html'
})
export class MListNewTx {
  constructor(
    
    public dialogRef: MatDialogRef<MListNewTx>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

// Member-Component
@Component({
  selector: 'app-mlist-new-member',
  templateUrl:'./mlist-new-member.html'
})
export class MListNewMember{
  constructor(
    public dialogRef: MatDialogRef<MListNewMember>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ){}
  onNoClick(): void {
    this.dialogRef.close();
  }
}


// Product-Component
@Component({
  selector: 'app-mlist-new-product',
  templateUrl: './mlist-new-product.html',
})

export class MListNewProduct{
  
  constructor(
    public dialogRef: MatDialogRef<MListNewProduct>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}

// Request-Component
@Component({
  selector: 'app-mlist-new-request',
  templateUrl: './mlist-new-request.html',
})

export class MListNewRequest{
  
  constructor(public dialogRef: MatDialogRef<MListNewRequest>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}