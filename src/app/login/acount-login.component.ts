import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acount-login',
  templateUrl: './acount-login.component.html',
  styleUrls: ['./acount-login.component.css']
})
export class AcountLoginComponent implements OnInit {
  userName:string;
  password:string;
  constructor() { }

  ngOnInit(): void {
  }

}
