import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token:any;
  constructor() {
     this.token = localStorage.getItem('token');
  }

  setToken(token :string){
    localStorage.setItem('token',token);
    this.token=token;
  }

  getToken(){
    return this.token;
  }
  deleteToken(){
    localStorage.removeItem('token')
   this.token=null;
  }

}
