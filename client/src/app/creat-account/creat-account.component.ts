import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.css']
})
export class CreatAccountComponent implements OnInit {

  userName: string ;
  name:string ;
  surname:string;
  password:string;
  repassword:string;
  constructor() { }

  ngOnInit(): void {
  }

}
