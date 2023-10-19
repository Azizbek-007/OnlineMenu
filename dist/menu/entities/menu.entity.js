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
exports.Menu = void 0;
const category_entity_1 = require("../../category/entities/category.entity");
const orderproduct_entity_1 = require("../../orderproducts/entities/orderproduct.entity");
const typeorm_1 = require("typeorm");
let Menu = class Menu extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Menu.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Menu.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Menu.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 15000,
    }),
    __metadata("design:type", String)
], Menu.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Menu.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Menu.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => category_entity_1.Category, (category) => category.menu, { createForeignKeyConstraints: false }),
    __metadata("design:type", category_entity_1.Category)
], Menu.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => orderproduct_entity_1.Orderproduct, (product) => product.menu),
    __metadata("design:type", orderproduct_entity_1.Orderproduct)
], Menu.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Menu.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Menu.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Menu.prototype, "deletedAt", void 0);
Menu = __decorate([
    (0, typeorm_1.Entity)()
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=menu.entity.js.map