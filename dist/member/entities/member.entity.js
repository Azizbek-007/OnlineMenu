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
exports.Member = void 0;
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
let Member = class Member extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Member.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Member.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Member.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'qq' }),
    __metadata("design:type", String)
], Member.prototype, "lang", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => order_entity_1.Order, (order) => order.member, { createForeignKeyConstraints: false }),
    __metadata("design:type", order_entity_1.Order)
], Member.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Member.prototype, "createdAt", void 0);
Member = __decorate([
    (0, typeorm_1.Entity)()
], Member);
exports.Member = Member;
//# sourceMappingURL=member.entity.js.map