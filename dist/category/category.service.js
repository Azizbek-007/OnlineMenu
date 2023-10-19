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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
const data_source_1 = require("../data-source");
let CategoryService = class CategoryService {
    constructor(CategoryRepository) {
        this.CategoryRepository = CategoryRepository;
    }
    async create(createCategoryDto) {
        const category = this.CategoryRepository.create(createCategoryDto);
        return await this.CategoryRepository.save(category);
    }
    async findAll() {
        const categories = await this.CategoryRepository.find({
            relations: {
                menu: true
            }
        });
        if (categories.length == 0) {
            throw new common_1.NotFoundException();
        }
        const responseData = categories.map(category => {
            return {
                id: category.id,
                name: category.name,
                menu: category.menu.map(menu => {
                    return {
                        id: menu.id,
                        name: menu.name,
                        price: menu.price,
                        avatar: menu.avatar ? `${data_source_1.baseUrl}/uploads/${menu.avatar}` : null,
                        category: menu.category
                    };
                })
            };
        });
        return responseData;
    }
    async findOne(id) {
        console.log('ok');
        const category = await this.CategoryRepository.findOne({
            relations: {
                menu: true
            },
            where: { id }
        });
        if (!category) {
            throw new common_1.NotFoundException(`There isn't any category with id: ${id}`);
        }
        return category;
    }
    async update(id, updateCategoryDto) {
        const category = await this.CategoryRepository.findOneBy({ id });
        if (!category) {
            throw new common_1.NotFoundException(`There isn't any category with id: ${id}`);
        }
        this.CategoryRepository.merge(category, updateCategoryDto);
        return this.CategoryRepository.save(category);
    }
    async remove(id) {
        const category = await this.CategoryRepository.findOneBy({ id });
        if (!category) {
            throw new common_1.NotFoundException(`There isn't any category with id: ${id}`);
        }
        return this.CategoryRepository.remove(category);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map