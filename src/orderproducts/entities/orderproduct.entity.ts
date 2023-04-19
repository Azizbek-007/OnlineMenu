import { Menu } from "src/menu/entities/menu.entity";
import { Order } from "src/order/entities/order.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orderproduct extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => Order, (order) => order.products, { createForeignKeyConstraints: false})
    order: Order;


    @ManyToOne((type) => Menu, (menu) => menu.product, { createForeignKeyConstraints: false })
    menu: Menu;


    @Column()
    count: number;
}
