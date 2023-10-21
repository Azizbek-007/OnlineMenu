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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const menu_entity_1 = require("./entities/menu.entity");
const DEFAULT_TAKE = 10;
const DEFAULT_PAGE = 1;
let MenuService = class MenuService {
    constructor(MenuRepository) {
        this.MenuRepository = MenuRepository;
    }
    async create(createMenuDto) {
        const menu = this.MenuRepository.create(createMenuDto);
        const newMenu = await this.MenuRepository.save(menu);
        return newMenu;
    }
    async search(data, query) {
        const { take = DEFAULT_TAKE, page = DEFAULT_PAGE } = query;
        const skip = (page - 1) * take;
        if (data == ':search') {
            const result = await this.MenuRepository.find({
                take,
                skip
            });
            return result;
        }
        const result = await this.MenuRepository.find({
            where: {
                name: (0, typeorm_2.Like)("%" + data + "%"),
                deletedAt: (0, typeorm_2.IsNull)()
            },
            take,
            skip
        });
        return result;
    }
    async update(id, updateMenuDto) {
        const menu = await this.MenuRepository.findOneBy({ id });
        if (!menu) {
            throw new common_1.NotFoundException(`There isn't any menu with id: ${id}`);
        }
        this.MenuRepository.merge(menu, updateMenuDto);
        return this.MenuRepository.save(menu);
    }
    async remove(id) {
        const category = await this.MenuRepository.findOneBy({ id });
        if (!category) {
            throw new common_1.NotFoundException(`There isn't any menu with id: ${id}`);
        }
        return this.MenuRepository.remove(category);
    }
};
MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(menu_entity_1.Menu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map