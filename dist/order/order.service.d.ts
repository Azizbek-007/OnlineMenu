import { Member } from 'src/member/entities/member.entity';
import { Menu } from 'src/menu/entities/menu.entity';
import { Orderproduct } from 'src/orderproducts/entities/orderproduct.entity';
import { OrderproductsService } from 'src/orderproducts/orderproducts.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Status } from './util/status.enum';
export declare class OrderService extends OrderproductsService {
    private readonly OrderRepo;
    private readonly OrderproductRepo;
    private readonly MenuRepo;
    private readonly MemberRepo;
    constructor(OrderRepo: Repository<Order>, OrderproductRepo: Repository<Orderproduct>, MenuRepo: Repository<Menu>, MemberRepo: Repository<Member>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(query: {
        take: number;
        page: number;
        status: Status;
    }): Promise<{
        data: Order[];
        count: number;
    }>;
    findOne(id: number): string;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(id: number): string;
}
