import { AuthService } from './../Services/auth.service';
import { UserService } from './../Services/user.service';
import { TodoService } from './../Services/todo.service';import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit  {
/*   userProfil:any;
  connectUser:any;
  ownProfil:boolean;
  loading:boolean;
  username:string;
  name:string;
  repassword:string;
  oldpassword:string;
  selectedAccess:string;
  editingUsername:boolean;
  editingName:boolean;


  editingPassword:boolean;
  editAccess:boolean; */

  constructor(private userService: UserService,private todoService:TodoService)  { }

  ngOnInit(): void {
/*     this.router.navigate(['/login']) }
 */ 


}
}
