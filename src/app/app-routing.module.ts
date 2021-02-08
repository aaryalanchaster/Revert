import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterCardComponent } from './login/register-card/register-card.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  { path: '*', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
