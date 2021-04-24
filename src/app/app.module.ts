import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { TxTableComponent } from './home/tx-table/tx-table.component';
import { MemberComponent } from './dialog/member/member.component';
import { TxComponent } from './dialog/tx/tx.component';
import { RequestComponent } from './dialog/request/request.component';
import { ProductComponent } from './dialog/product/product.component';
import { LoginCardComponent } from './login/login-card/login-card.component';
import { RegisterCardComponent } from './login/register-card/register-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeProducerComponent } from './home-producer/home-producer.component';
import { HomeTraderComponent } from './home-trader/home-trader.component';
import { HomeConsumerComponent } from './home-consumer/home-consumer.component';
import { HomeCompanyComponent } from './home-company/home-company.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './services/api.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    TxTableComponent,
    MemberComponent,
    TxComponent,
    RequestComponent,
    ProductComponent,
    LoginCardComponent,
    RegisterCardComponent,
    DashboardComponent,
    HomeProducerComponent,
    HomeTraderComponent,
    HomeConsumerComponent,
    HomeCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule



  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

