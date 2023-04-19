"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderproductsModule = void 0;
const common_1 = require("@nestjs/common");
const orderproducts_service_1 = require("./orderproducts.service");
const orderproducts_controller_1 = require("./orderproducts.controller");
const typeorm_1 = require("@nestjs/typeorm");
const orderproduct_entity_1 = require("./entities/orderproduct.entity");
const order_entity_1 = require("../order/entities/order.entity");
const menu_entity_1 = require("../menu/entities/menu.entity");
let OrderproductsModule = class OrderproductsModule {
};
OrderproductsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([orderproduct_entity_1.Orderproduct, order_entity_1.Order, menu_entity_1.Menu])],
        controllers: [orderproducts_controller_1.OrderproductsController],
        providers: [orderproducts_service_1.OrderproductsService]
    })
], OrderproductsModule);
exports.OrderproductsModule = OrderproductsModule;
//# sourceMappingURL=orderproducts.module.js.map