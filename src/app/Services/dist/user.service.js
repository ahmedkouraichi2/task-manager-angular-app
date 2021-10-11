"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UserService = /** @class */ (function () {
    // il va apporter le token a partir de authService
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        //cest type  BehaviorSubject poroiétaite d un evenment de connection
        //behaiorlesner ecoute
        this.connectedUser = new rxjs_1.BehaviorSubject(null);
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('https://todo-manager-nest-api.herokuapp.com/user');
    };
    //appoerte l utilisatur a partir de son Token
    UserService.prototype.getConnectUser = function () {
        // headres contient le Token sous forme de Bearer + token
        var headers = new http_1.HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('https://todo-manager-nest-api.herokuapp.com/user/token', { headers: headers });
    };
    UserService.prototype.userLogin = function (userName, password) {
        return this.http.post('https://todo-manager-nest-api.herokuapp.com/user/login', { username: userName, password: password });
    };
    UserService.prototype.getUser = function (userId) {
        return this.http.get('https://todo-manager-nest-api.herokuapp.com/user' + userId);
    };
    //connctUser() modifie la valeur de l'utisateur courrant 
    UserService.prototype.connectUser = function (user) {
        this.connectedUser.next(user);
    };
    UserService.prototype.addUser = function (username, surname, name, password) {
        return this.http.post('https://todo-manager-nest-api.herokuapp.com/user', { username: username, surname: surname, password: password, name: name });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http["delete"]('https://todo-manager-nest-api.herokuapp.com/user' + userId);
    };
    UserService.prototype.updateUser = function (userId, username, name, surname, access) {
        return this.http.patch('https://todo-manager-nest-api.herokuapp.com/user/' + userId, { username: username, name: name, surname: surname, access: access });
    };
    UserService.prototype.updateUserPassword = function (userId, oldPassword, newPassword) {
        return this.http.patch('https://todo-manager-nest-api.herokuapp.com/user/password' + userId, { oldPassword: oldPassword, newPassword: newPassword });
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
