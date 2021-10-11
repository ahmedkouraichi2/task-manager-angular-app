import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  connected:boolean;

  constructor(private userService:UserService) {
    //initialisation
    this.connected=false;
    //ecoute sur le changement de l'utilisatrur courant
    this.userService.connectedUser.subscribe((newUser:any)=>{
      if(newUser){
        this.connected=true;
        this.user=newUser;
        //test
      }
      })

  }

  ngOnInit(): void {
  }



}



