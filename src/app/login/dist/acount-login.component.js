"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AcountLoginComponent = void 0;
var core_1 = require("@angular/core");
var AcountLoginComponent = /** @class */ (function () {
    function AcountLoginComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    AcountLoginComponent.prototype.ngOnInit = function () {
    };
    AcountLoginComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.userService.userLogin(this.userName, this.password)
            .subscribe(function (res) {
            console.log(res.access_token);
            _this.authService.setToken(res.access_token);
            _this.authService.setToken(res);
        });
    };
    AcountLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-acount-login',
            templateUrl: './acount-login.component.html',
            styleUrls: ['./acount-login.component.css']
        })
    ], AcountLoginComponent);
    return AcountLoginComponent;
}());
exports.AcountLoginComponent = AcountLoginComponent;
