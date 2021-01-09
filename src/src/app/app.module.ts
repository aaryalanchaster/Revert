import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ADashboardComponent } from './nav/a-dashboard/a-dashboard.component';
import { MlistComponent } from './nav/a-dashboard/mlist/mlist.component';
import { TxTableComponent } from './nav/a-dashboard/tx-table/tx-table.component'
import { MListNewProduct } from './nav/a-dashboard/mlist/mlist.component'
import { MListNewRequest } from './nav/a-dashboard/mlist/mlist.component'
import { MListNewTx } from './nav/a-dashboard/mlist/mlist.component'
import { MListNewMember } from './nav/a-dashboard/mlist/mlist.component';
import { LoginpageComponent } from './loginpage/loginpage.component'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ADashboardComponent,
    MlistComponent,
    TxTableComponent,
    MListNewProduct,
    MListNewRequest,
    MListNewTx,
    MListNewMember,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
