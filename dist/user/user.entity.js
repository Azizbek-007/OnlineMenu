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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt = require("bcryptjs");
const class_transformer_1 = require("class-transformer");
const company_entity_1 = require("../company/entities/company.entity");
const typeorm_1 = require("typeorm");
let User = class User {
    constructor(data = {}) {
        Object.assign(this, data);
    }
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        if (!/^\$2[abxy]?\$\d+\$/.test(this.password)) {
            this.password = await bcrypt.hash(this.password, salt);
        }
    }
    async checkPassword(plainPassword) {
        return await bcrypt.compare(plainPassword, this.password);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => company_entity_1.Company, { nullable: true, createForeignKeyConstraints: false }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Object)
], User.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map