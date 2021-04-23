import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberComponent } from '../dialog/member/member.component'
import { ProductComponent } from '../dialog/product/product.component'
import { RequestComponent } from '../dialog/request/request.component'
import { TxComponent } from '../dialog/tx/tx.component'

@Component({
  selector: 'app-home-consumer',
  templateUrl: './home-consumer.component.html',
  styleUrls: ['./home-consumer.component.css']
})
export class HomeConsumerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  // open-member
  openDialogMember(): void {
    const dialogRef = this.dialog.open(MemberComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //open-Tx 
  openDialogTx(): void {
    const dialogRef = this.dialog.open(TxComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  // open-request
  openDialogRequest(): void {
    const dialogRef = this.dialog.open(RequestComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }


  // open-product
  openDialogProduct(): void {
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}




