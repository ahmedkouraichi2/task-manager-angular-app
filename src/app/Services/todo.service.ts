import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos(){
    return  this.http.get('https://todo-manager-nest-api.herokuapp.com/todo')

  }


  getTodo( todoId:string){
  return this.http.get('https://todo-manager-nest-api.herokuapp.com/todo/'+todoId)
}
 addTodo(title:string,description:string){
  return this.http.post('https://todo-manager-nest-api.herokuapp.com/todo',{title:title,description:description})
 }

 updateTodo(todoId:string,title:string,description:string){
  return this.http.patch('https://todo-manager-nest-api.herokuapp.com/todo/'+todoId ,{title:title,description:description})
}
 updateTodoState(todoId:string,state:boolean){
   return this.http.patch('https://todo-manager-nest-api.herokuapp.com/todo/'+todoId,{state:state})
 }

 deleteTodo(todoId:string){
   return this.http.delete('https://todo-manager-nest-api.herokuapp.com/todo/'+todoId)
 }


}

