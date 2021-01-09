import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { MlistComponent } from './a-dashboard/mlist/mlist.component';
import { TxTableComponent } from './a-dashboard/tx-table/tx-table.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ADashboardComponent,
    MlistComponent,
    TxTableComponent
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
