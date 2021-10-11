import { AuthService } from './Services/auth.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatAccountComponent } from './creat-account/creat-account.component';
import { AcountLoginComponent } from './login/acount-login.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations:[AppComponent,NavbarComponent,ProfilComponent,AcountLoginComponent,
  CreatAccountComponent,HomeComponent

  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
