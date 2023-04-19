import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { StatusDto } from './dto/queryStatus.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<import("./entities/order.entity").Order>;
    findAll(query: StatusDto): Promise<{
        data: import("./entities/order.entity").Order[];
        count: number;
    }>;
    findOne(id: string): string;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("./entities/order.entity").Order>;
    remove(id: string): string;
}
