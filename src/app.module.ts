import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { dataSourceOptions } from './data-source';
import { HealthController } from './health.controller';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    TerminusModule,
    UserModule,
    AuthModule,
    TodoModule,
    CategoryModule,
    MenuModule
  ],
  controllers: [HealthController]
})
export class AppModule {}
