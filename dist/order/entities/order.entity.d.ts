import { Member } from "src/member/entities/member.entity";
import { Orderproduct } from "src/orderproducts/entities/orderproduct.entity";
import { BaseEntity } from "typeorm";
import { Status } from "../util/status.enum";
export declare class Order extends BaseEntity {
    id: number;
    member: Member;
    adress: string;
    comment: string;
    products: Orderproduct;
    total_price: number;
    status: Status;
    createdAt: Date;
    deletedAt: Date;
}
