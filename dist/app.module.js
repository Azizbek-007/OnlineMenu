"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const data_source_1 = require("./data-source");
const health_controller_1 = require("./health.controller");
const todo_module_1 = require("./todo/todo.module");
const user_module_1 = require("./user/user.module");
const category_module_1 = require("./category/category.module");
const menu_module_1 = require("./menu/menu.module");
const config_1 = require("@nestjs/config");
const order_module_1 = require("./order/order.module");
const member_module_1 = require("./member/member.module");
const orderproducts_module_1 = require("./orderproducts/orderproducts.module");
const statistics_module_1 = require("./statistics/statistics.module");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.memoryStorage)(),
                dest: './uploads',
                limits: {
                    fileSize: 1024 * 1024 * 2,
                }
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '/uploads'),
                serveRoot: '/uploads',
                serveStaticOptions: {
                    cacheControl: true,
                    immutable: true,
                }
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot(Object.assign(Object.assign({}, data_source_1.dataSourceOptions), { autoLoadEntities: true })),
            terminus_1.TerminusModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            todo_module_1.TodoModule,
            category_module_1.CategoryModule,
            menu_module_1.MenuModule,
            order_module_1.OrderModule,
            member_module_1.MemberModule,
            orderproducts_module_1.OrderproductsModule,
            statistics_module_1.StatisticsModule
        ],
        controllers: [health_controller_1.HealthController]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map