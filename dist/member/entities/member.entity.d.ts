import { Order } from "src/order/entities/order.entity";
import { BaseEntity } from "typeorm";
export declare class Member extends BaseEntity {
    id: number;
    user_id: string;
    full_name: string;
    phone_number: string;
    lang: string;
    order: Order;
    createdAt: Date;
}
