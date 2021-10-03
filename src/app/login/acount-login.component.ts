import { AuthService } from './../Services/auth.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acount-login',
  templateUrl: './acount-login.component.html',
  styleUrls: ['./acount-login.component.css']
})
export class AcountLoginComponent implements OnInit {
  userName:string;
  password:string;
  constructor(private userService:UserService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  OnSubmit(){

    this.userService.userLogin(this.userName,this.password)
    .subscribe((res:any)=>{
       console.log(res.access_token)
       this.authService.setToken(res.access_token)
        this.authService.setToken(res)

    })
  }


}
