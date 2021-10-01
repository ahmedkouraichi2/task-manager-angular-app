"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodoService = void 0;
var core_1 = require("@angular/core");
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get('https://todo-manager-nest-api.herokuapp.com/todo');
    };
    TodoService.prototype.getTodo = function (todoId) {
        return this.http.get('https://todo-manager-nest-api.herokuapp.com/todo/' + todoId);
    };
    TodoService.prototype.addTodo = function (title, description) {
        return this.http.post('https://todo-manager-nest-api.herokuapp.com/todo', { title: title, description: description });
    };
    TodoService.prototype.updateTodo = function (todoId, title, description) {
        return this.http.patch('https://todo-manager-nest-api.herokuapp.com/todo/' + todoId, { title: title, description: description });
    };
    TodoService.prototype.updateTodoState = function (todoId, state) {
        return this.http.patch('https://todo-manager-nest-api.herokuapp.com/todo/' + todoId, { state: state });
    };
    TodoService.prototype.deleteTodo = function (todoId) {
        return this.http["delete"]('https://todo-manager-nest-api.herokuapp.com/todo/' + todoId);
    };
    TodoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
