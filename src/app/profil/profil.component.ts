import { UserService } from './../Services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit  {

  constructor(private http :HttpClient ,private userService: UserService) { }

  ngOnInit(): void {

  }
  getuser(){
    this.userService.getUsers
  }

}
