import { Member } from "src/member/entities/member.entity";
import { Orderproduct } from "src/orderproducts/entities/orderproduct.entity";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../util/status.enum";

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Member, member => member.order, { createForeignKeyConstraints: false }) 
    member: Member;  

    @Column()
    adress: string;

    @Column()
    comment: string;

    @OneToMany((type) => Orderproduct, (product) => product.order, {'cascade': ['update', 'remove', 'insert']}) 
    products: Orderproduct;

    @Column()
    total_price: number;
 
    @Column({
        type: 'enum',
        enum: Status,
        default: Status['Expectation']
    })
    status: Status;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
