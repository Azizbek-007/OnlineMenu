import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { StatusDto } from './dto/queryStatus.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<any>;
    findAll(query: StatusDto): Promise<{
        data: any;
        count: any;
    }>;
    findOne(id: string): string;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<any>;
    remove(id: string): string;
}
