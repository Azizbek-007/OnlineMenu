import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orderproduct } from 'src/orderproducts/entities/orderproduct.entity';
import { Order } from './entities/order.entity';
import { Member } from 'src/member/entities/member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Orderproduct, Order, Member])
  ],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
