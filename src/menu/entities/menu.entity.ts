import { Category } from "src/category/entities/category.entity";
import { Orderproduct } from "src/orderproducts/entities/orderproduct.entity";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Menu extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
      type: "string"
    })
    avatar: string;

    @Column()
    price: string;

    @Column({ nullable: true })
    sale: number;

    @ManyToOne((type) => Category, (category) => category.menu, { createForeignKeyConstraints: false})
    category: Category;

    @OneToMany((type) => Orderproduct, (product) => product.menu)
    product: Orderproduct

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
