import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //cest type  BehaviorSubject poroiétaite d un evenment de connection
  //behaiorlesner ecoute

  connectedUser:BehaviorSubject<any> = new BehaviorSubject(null);

  // il va apporter le token a partir de authService

  constructor(private http:HttpClient, private  authService: AuthService) { }

  getUsers(){
     return this.http.get('https://todo-manager-nest-api.herokuapp.com/user')
  }
  //appoerte l utilisatur a partir de son Token
  getConnectUser() {
// headres contient le Token sous forme de Bearer + token
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get('https://todo-manager-nest-api.herokuapp.com/user/token', { headers: headers })
}
 userLogin(userName:string,password:string){
    return this.http.post('https://todo-manager-nest-api.herokuapp.com/user/login',{username:userName,password:password},)
 }
  getUser(userId:string){
    return this.http.get('https://todo-manager-nest-api.herokuapp.com/user'+userId)
  }

  //connctUser() modifie la valeur de l'utisateur courrant 
  connectUser(user:any){
    this.connectedUser.next(user)

  }

  addUser(username:string,surname:string,name:string,password:string){
    return this.http.post('https://todo-manager-nest-api.herokuapp.com/user',{username:username,surname:surname,password:password,name:name})


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

