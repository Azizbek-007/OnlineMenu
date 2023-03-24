import { DataSourceOptions, DataSource } from 'typeorm';
import { Branche } from './branche/entities/branche.entity';
import { Company } from './company/entities/company.entity';

import { CreateUser1557166726050 } from './migrations/1557166726050-CreateUser';
import { CreateSessionStorage1584985637890 } from './migrations/1584985637890-CreateSessionStorage';
import { Todo } from './todo/todo.entity';
import { User } from './user/entities/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Todo, Company, Branche],
  migrations: [
    CreateUser1557166726050,
    CreateSessionStorage1584985637890
  ],
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
