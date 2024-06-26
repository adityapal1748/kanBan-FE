import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },{
    path:"login",
    component:LoginComponent
  }
  // {
  //   path:"**",
  //   component:LandingPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
