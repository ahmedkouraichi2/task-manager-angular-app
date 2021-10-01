import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user :string;
  users:string[];
  selectedUser:string;
  description:string;
  editTitle:string;
  editDescription:string;

  constructor() { }

  ngOnInit(): void {
  }
  ok(){
    console.log('todo')
  }

}
