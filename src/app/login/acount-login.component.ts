import { AuthService } from './../Services/auth.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acount-login',
  templateUrl: './acount-login.component.html',
  styleUrls: ['./acount-login.component.css']
})
export class AcountLoginComponent implements OnInit {
  userName:string;
  password:string;
  constructor(private userService:UserService, private authService:AuthService,private router :Router) { }

  ngOnInit(): void {
  }

  OnSubmit(){

    this.userService.userLogin(this.userName,this.password)
    .subscribe((res:any)=>{
      //applle set token in local storage
       this.authService.setToken(res.access_token);
       //elle va routourner l utlisateur courant a partir du Token qui est dans authService
       this.userService.getConnectUser()
       .subscribe((user:any)=>{
         console.log(user)
         //affecte l'utlisateur retourner par le back end au utlisatur courrant de l'application
         this.userService.connectUser(user)
         this.router.navigate(['/home'] )

       })

    })
  }


}
