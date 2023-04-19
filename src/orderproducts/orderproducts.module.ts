import { Module } from '@nestjs/common';
import { OrderproductsService } from './orderproducts.service';
import { OrderproductsController } from './orderproducts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderproduct } from './entities/orderproduct.entity';
import { Order } from 'src/order/entities/order.entity';
import { Menu } from 'src/menu/entities/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ Orderproduct, Order, Menu])],
  controllers: [OrderproductsController],
  providers: [OrderproductsService]
})
export class OrderproductsModule {}
