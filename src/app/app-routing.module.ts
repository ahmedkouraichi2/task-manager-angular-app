import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { AcountLoginComponent } from './login/acount-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:AcountLoginComponent},
  {path:"create",component:CreatAccountComponent},
  {path:"profil",component:ProfilComponent},
  {path:"**",redirectTo:"/home"},

]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
