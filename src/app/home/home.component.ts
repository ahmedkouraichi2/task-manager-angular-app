import { Component, OnInit } from '@angular/core';
import { AuthService } from './../Services/auth.service';
import { UserService } from './../Services/user.service';
import { TodoService } from './../Services/todo.service';
import { RouterModule, Routes } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 todos:any;
 title:string;
 description:string;
 toEditId:string;
 editDescription:string;
 editTitle:string;
 users:any;
 selectedUser:string;

  constructor( private authService : AuthService, private todoService :TodoService) { }


  ngOnInit(){
 
  }
 

}


