import { Repository } from 'typeorm';
import { Orderproduct } from './entities/orderproduct.entity';
export declare class OrderproductsService {
    private readonly OrderProductRepo;
    constructor(OrderProductRepo: Repository<Orderproduct>);
    createProduct(data: {
        order: any;
        menu: any;
        count: number;
    }): Promise<void>;
}
