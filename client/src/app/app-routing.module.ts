import { ProfilComponent } from './profil/profil.component';
import { TodoComponent } from './todo/todo.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { AcountLoginComponent } from './login/acount-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
