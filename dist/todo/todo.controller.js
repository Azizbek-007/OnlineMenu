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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const session_auth_guard_1 = require("../auth/guards/session-auth.guard");
const todo_create_dto_1 = require("./todo-create.dto");
const user_decorator_1 = require("../user/decorators/user.decorator");
const user_entity_1 = require("../user/entities/user.entity");
const todo_update_dto_1 = require("./todo-update.dto");
let TodoController = class TodoController {
    constructor(service) {
        this.service = service;
    }
    createTodo(newTodo, user) {
        newTodo.owner = user;
        return this.service.createTodo(newTodo);
    }
    listTodo(user) {
        return this.service.listTodo(user);
    }
    async getTodo(id, user) {
        return this.service.getTodo(id, user);
    }
    async updateTodo(id, updates, user) {
        const todo = await this.service.getTodo(id, user);
        return this.service.updateTodo(todo, updates);
    }
    async removeTodo(id, user) {
        const todo = await this.service.getTodo(id, user);
        return this.service.removeTodo(todo);
    }
    async markTodoAsDone(id, user) {
        let todo = await this.service.getTodo(id, user);
        if (todo.done) {
            return { done: todo.done };
        }
        todo = await this.service.updateTodo(todo, { done: true });
        return { done: todo.done, updatedAt: todo.updatedAt };
    }
    async markTodoAsPending(id, user) {
        let todo = await this.service.getTodo(id, user);
        if (!todo.done) {
            return { done: todo.done };
        }
        todo = await this.service.updateTodo(todo, { done: false });
        return { done: todo.done, updatedAt: todo.updatedAt };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_create_dto_1.TodoCreate,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "listTodo", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, todo_update_dto_1.TodoUpdate,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "removeTodo", null);
__decorate([
    (0, common_1.Patch)(':id/done'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "markTodoAsDone", null);
__decorate([
    (0, common_1.Patch)(':id/pending'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "markTodoAsPending", null);
TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, jwt_auth_guard_1.JWTAuthGuard),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map