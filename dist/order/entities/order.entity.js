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
exports.Order = void 0;
const member_entity_1 = require("../../member/entities/member.entity");
const orderproduct_entity_1 = require("../../orderproducts/entities/orderproduct.entity");
const typeorm_1 = require("typeorm");
const status_enum_1 = require("../util/status.enum");
let Order = class Order extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => member_entity_1.Member, member => member.order, { 'cascade': ['update', 'remove', 'insert'] }),
    __metadata("design:type", Array)
], Order.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "adress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => orderproduct_entity_1.Orderproduct, (product) => product.order, { 'cascade': ['update', 'remove', 'insert'] }),
    __metadata("design:type", orderproduct_entity_1.Orderproduct)
], Order.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: status_enum_1.Status,
        default: status_enum_1.Status['Expectation']
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Order.prototype, "deletedAt", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map