import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
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
