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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const todo_entity_1 = require("./todo.entity");
let TodoService = class TodoService {
    constructor(repo) {
        this.repo = repo;
    }
    createTodo(newTodo) {
        const todo = this.repo.create(newTodo);
        return this.repo.save(todo);
    }
    listTodo(owner) {
        return this.repo.find({
            where: { owner: { id: owner.id } },
            order: { createdAt: 'DESC' },
        });
    }
    async getTodo(id, owner) {
        const todo = await this.repo.findOne({
            where: { id },
            loadRelationIds: true,
        });
        if (!todo)
            throw new common_1.NotFoundException(`Not found any todo with id: ${id}`);
        if (todo.owner !== owner.id)
            throw new common_1.ForbiddenException(`Todo does not belong to you`);
        return todo;
    }
    updateTodo(todo, updates) {
        this.repo.merge(todo, updates);
        return this.repo.save(todo);
    }
    removeTodo(todo) {
        return this.repo.remove(todo);
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map