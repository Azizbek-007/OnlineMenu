import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { StaticQuery } from './dto/queryStatus.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Order)
    private readonly OrderRepo: Repository<Order>,
  ) {}
  async finance () { 

  }
  create(createStatisticDto: CreateStatisticDto) {
    return 'This action adds a new statistic';
  }

  async findAll(query: StaticQuery) {
    const { start, end } = query;
    const data = await this.OrderRepo.query("SELECT DATE_FORMAT(createdAt, '%Y-%m-%d') AS date, SUM(total_price) AS total "+
    "FROM `order` "+
    `WHERE createdAt >= '${start} 00:00:00' AND createdAt < '${end} 00:00:00' ` +
    "GROUP BY DATE_FORMAT(createdAt, '%Y-%m-%d'), FLOOR((DAY(createdAt) - 1) / 30) " +
    "ORDER BY createdAt ASC;")
    if (data.length == 0) {
      throw new NotFoundException()
    }
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} statistic`;
  }

  update(id: number, updateStatisticDto: UpdateStatisticDto) {
    return `This action updates a #${id} statistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} statistic`;
  }
}
