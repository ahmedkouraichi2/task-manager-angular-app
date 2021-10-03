import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private  authService: AuthService) { }

  getUsers(){
     return this.http.get('https://todo-manager-nest-api.herokuapp.com/user')
  }
  getConnectUser() {

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get('https://todo-manager-nest-api.herokuapp.com', { headers: headers })
}
 userLogin(userName:string,password:string){
    return this.http.post('https://todo-manager-nest-api.herokuapp.com/user/login',{username:userName,password:password})
 }
  getUser(userId:string){
    return this.http.get('https://todo-manager-nest-api.herokuapp.com/user'+userId)
  }

  addUser(userName:string,password:string,name:string,access:boolean){
    return this.http.post('https://todo-manager-nest-api.herokuapp.com/user',{userName:userName,password:password,name:name,access:access},)

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

