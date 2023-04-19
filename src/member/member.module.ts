import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Order } from 'src/order/entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Member, Order ])
  ],
  controllers: [MemberController],
  providers: [MemberService]
})
export class MemberModule {}
