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
exports.Orderproduct = void 0;
const menu_entity_1 = require("../../menu/entities/menu.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
let Orderproduct = class Orderproduct extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Orderproduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => order_entity_1.Order, (order) => order.products, { createForeignKeyConstraints: false }),
    __metadata("design:type", order_entity_1.Order)
], Orderproduct.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => menu_entity_1.Menu, (menu) => menu.product, { createForeignKeyConstraints: false }),
    __metadata("design:type", menu_entity_1.Menu)
], Orderproduct.prototype, "menu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Orderproduct.prototype, "count", void 0);
Orderproduct = __decorate([
    (0, typeorm_1.Entity)()
], Orderproduct);
exports.Orderproduct = Orderproduct;
//# sourceMappingURL=orderproduct.entity.js.map