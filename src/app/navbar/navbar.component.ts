import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  User:string="Ahmed";
  connected=false;

  constructor() { }

  ngOnInit(): void {
  }

  connection(){
    this.connected=true;
  }

}



