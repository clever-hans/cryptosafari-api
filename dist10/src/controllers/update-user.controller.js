"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const user_repository_1 = require("../repositories/user.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from @loopback/context;
let Update_userController = class Update_userController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
};
Update_userController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepo)),
    __metadata("design:paramtypes", [user_repository_1.UserRepo])
], Update_userController);
exports.Update_userController = Update_userController;
//# sourceMappingURL=update-user.controller.js.map