import { Module } from '@nestjs/common';
import { BrancheService } from './branche.service';
import { BrancheController } from './branche.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branche } from './entities/branche.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ Branche ])],
  controllers: [BrancheController],
  providers: [BrancheService],
  exports: [BrancheService]
})
export class BrancheModule {}
