import { StatisticsService } from './statistics.service';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';
import { StaticQuery } from './dto/queryStatus.dto';
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
    create(createStatisticDto: CreateStatisticDto): string;
    findAll(query: StaticQuery): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateStatisticDto: UpdateStatisticDto): string;
    remove(id: string): string;
}
