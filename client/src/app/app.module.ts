import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { AcountLoginComponent } from './login/acount-login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations:[AppComponent,NavbarComponent,ProfilComponent,SignupComponent,AcountLoginComponent,
  CreatAccountComponent,TodoComponent

  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
