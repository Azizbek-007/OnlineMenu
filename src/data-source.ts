import { DataSourceOptions, DataSource } from 'typeorm';
import { Category } from './category/entities/category.entity';
import { Menu } from './menu/entities/menu.entity';

import { Todo } from './todo/todo.entity';
import { User } from './user/entities/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Todo, Category, Menu],
  synchronize: true,
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
