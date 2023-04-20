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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const member_entity_1 = require("../member/entities/member.entity");
const menu_entity_1 = require("../menu/entities/menu.entity");
const orderproduct_entity_1 = require("../orderproducts/entities/orderproduct.entity");
const orderproducts_service_1 = require("../orderproducts/orderproducts.service");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
let OrderService = class OrderService extends orderproducts_service_1.OrderproductsService {
    constructor(OrderRepo, OrderproductRepo, MenuRepo, MemberRepo) {
        super(OrderproductRepo);
        this.OrderRepo = OrderRepo;
        this.OrderproductRepo = OrderproductRepo;
        this.MenuRepo = MenuRepo;
        this.MemberRepo = MemberRepo;
    }
    async create(createOrderDto) {
        const user = await this.MemberRepo.findOneBy({ user_id: createOrderDto['member'] });
        const new_order = this.OrderRepo.create({
            'adress': createOrderDto['address'],
            'comment': createOrderDto['comment'],
            'total_price': createOrderDto['total_price'],
            'member': user
        });
        const order_data = await this.OrderRepo.save(new_order);
        await Promise.all(createOrderDto['orders'].map(async (e) => {
            const menu = await this.MenuRepo.findOneBy({ id: e['product_id'] });
            await this.createProduct({
                order: order_data,
                menu: menu,
                count: e['count']
            });
        }));
        return order_data;
    }
    async findAll(query) {
        const take = query.take || 10;
        const page = query.page || 1;
        const skip = (page - 1) * take;
        const [result, total] = await this.OrderRepo.findAndCount({
            relations: {
                products: {
                    menu: true
                },
                member: true
            },
            where: {
                status: query['status']
            },
            order: {
                id: "DESC"
            },
            take,
            skip
        });
        return {
            data: result,
            count: total
        };
    }
    findOne(id) {
        return `This action returns a #${id} order`;
    }
    async update(id, updateOrderDto) {
        const order = await this.OrderRepo.findOneBy({ id });
        if (!order) {
            throw new common_1.NotFoundException(`There isn't any category with id: ${id}`);
        }
        this.OrderRepo.merge(order, updateOrderDto);
        return this.OrderRepo.save(order);
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(orderproduct_entity_1.Orderproduct)),
    __param(2, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __param(3, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map