import { DataSourceOptions, DataSource } from 'typeorm';
import { Category } from './category/entities/category.entity';
import { Menu } from './menu/entities/menu.entity';

import { User } from './user/entities/user.entity';

import * as dotenv from 'dotenv';
import { Order } from './order/entities/order.entity';
import { Member } from './member/entities/member.entity';
import { Orderproduct } from './orderproducts/entities/orderproduct.entity';
dotenv.config();

export const baseUrl = "http://kvartirabar.uz";

console.log(process.env.DB_PASSWORD)

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Category, Menu, Member, Order, Orderproduct],
  synchronize: true,
  logging: false,
  extra: {
    ssl:
      process.env.SSL_MODE === 'require'
        ? {
          rejectUnauthorized: false,
        }
        : false,
  },
};

export const appDataSource = new DataSource(dataSourceOptions);
