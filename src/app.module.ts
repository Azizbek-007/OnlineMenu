import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { dataSourceOptions } from './data-source';
import { HealthController } from './health.controller';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { MenuModule } from './menu/menu.module';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { MemberModule } from './member/member.module';
import { OrderproductsModule } from './orderproducts/orderproducts.module';
import { StatisticsModule } from './statistics/statistics.module';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: memoryStorage(),
      dest: './uploads',
      limits: {
        fileSize: 1024 * 1024 * 2,
      }
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/uploads'),
      serveRoot: '/uploads',
      serveStaticOptions: {
        cacheControl: true,
        immutable: true,
      }
    }),

    ConfigModule.forRoot({
      isGlobal: true
    }),

    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    TerminusModule,
    UserModule,
    AuthModule,
    CategoryModule,
    MenuModule,
    OrderModule,
    MemberModule,
    OrderproductsModule,
    StatisticsModule
  ],
  controllers: [HealthController]
})
export class AppModule { }
