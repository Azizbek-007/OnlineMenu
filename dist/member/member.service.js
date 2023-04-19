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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const member_entity_1 = require("./entities/member.entity");
let MemberService = class MemberService {
    constructor(MemberRepository) {
        this.MemberRepository = MemberRepository;
    }
    async create(createMemberDto) {
        try {
            const category = this.MemberRepository.create(createMemberDto);
            return await this.MemberRepository.save(category);
        }
        catch (error) {
            if (error['errno'] == 1062) {
                throw new common_1.ConflictException();
            }
        }
    }
    async findAll() {
        const members = await this.MemberRepository.find();
        if (members.length == 0) {
            throw new common_1.NotFoundException();
        }
        return members;
    }
    async update(id, updateMemberDto) {
        const member = await this.MemberRepository.findOneBy({ user_id: id });
        if (!member) {
            throw new common_1.NotFoundException(`There isn't any member with id: ${id}`);
        }
        this.MemberRepository.merge(member, updateMemberDto);
        return this.MemberRepository.save(member);
    }
};
MemberService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MemberService);
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map