import { Order } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { StaticQuery } from './dto/queryStatus.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
export declare class StatisticsService {
    private readonly OrderRepo;
    constructor(OrderRepo: Repository<Order>);
    finance(): Promise<void>;
    create(createStatisticDto: CreateStatisticDto): string;
    findAll(query: StaticQuery): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateStatisticDto: UpdateStatisticDto): string;
    remove(id: number): string;
}
