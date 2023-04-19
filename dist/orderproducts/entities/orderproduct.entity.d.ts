import { Menu } from "src/menu/entities/menu.entity";
import { Order } from "src/order/entities/order.entity";
import { BaseEntity } from "typeorm";
export declare class Orderproduct extends BaseEntity {
    id: number;
    order: Order;
    menu: Menu;
    count: number;
}
