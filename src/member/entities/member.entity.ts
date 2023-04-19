import { Order } from "src/order/entities/order.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Member extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    user_id: string;

    @Column()
    full_name: string;

    @Column({ nullable: true })
    phone_number: string;

    @Column({ default: 'qq' })
    lang: string;

    @ManyToOne((type) => Order, (order) => order.member, { createForeignKeyConstraints: false})
    order: Order;

    @CreateDateColumn()
    createdAt: Date;
}
