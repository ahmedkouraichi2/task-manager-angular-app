import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
     return this.http.get('https://todo-manager-nest-api.herokuapp.com/user')
  }
  getUser(userId:string){
    return this.http.get('https://todo-manager-nest-api.herokuapp.com/user'+userId)
  }

  addUser(userName:string,password:string,name:string,access:boolean){
    return this.http.post('https://todo-manager-nest-api.herokuapp.com/user',{userName:userName,password:password,name:name,access:access})

  }
  deleteUser(userId:string){
    return this.http.delete('https://todo-manager-nest-api.herokuapp.com/user'+userId)
  }

  updateUser(userId:string,username:string,name:string,surname:string,access:boolean){
    return this.http.patch('https://todo-manager-nest-api.herokuapp.com/user/'+userId,{username:username,name:name,surname:surname,access:access})
  }
  updateUserPassword(userId:string,oldPassword:string,newPassword:string){
    return this.http.patch('https://todo-manager-nest-api.herokuapp.com/user/password'+userId,{oldPassword:oldPassword,newPassword:newPassword})
  }

  }

