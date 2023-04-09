"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category/entities/category.entity");
const menu_entity_1 = require("./menu/entities/menu.entity");
const todo_entity_1 = require("./todo/todo.entity");
const user_entity_1 = require("./user/entities/user.entity");
exports.dataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [user_entity_1.User, todo_entity_1.Todo, category_entity_1.Category, menu_entity_1.Menu],
    synchronize: true,
    extra: {
        ssl: process.env.SSL_MODE === 'require'
            ? {
                rejectUnauthorized: false,
            }
            : false,
    },
};
exports.appDataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
//# sourceMappingURL=data-source.js.map