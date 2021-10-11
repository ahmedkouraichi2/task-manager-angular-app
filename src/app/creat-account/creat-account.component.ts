import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { AuthService } from './../Services/auth.service';



@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.css']
})
export class CreatAccountComponent implements OnInit {
  errorName:boolean=false
  message_error:string="error Input"
  username: string ;
  name:string ;
  surname:string;
  password:string;
  rePassword:string;
  address:string;
  phone:string;
  constructor(private  userService:UserService ,private authService:AuthService,private router:Router ) { }

  ngOnInit(): void {
  }

  onCreateAccount(){
    if(true){
      this.errorName=true;

      this.userService.addUser(this.username,this.surname,this.name,this.password).subscribe((reponse :any)=>{
        console.log(reponse)
        console.log(this.password);
        alert('user as ')
       this.router.navigate(['/login'])

      },


      error =>{
        console.log(error)
        alert('users not ')
      })

      }






    }
  }


