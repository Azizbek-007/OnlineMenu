import { Category } from "src/category/entities/category.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Menu extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    avatar: string;

    @Column()
    price: string;

    @Column({ nullable: true })
    sale: number;

    @ManyToOne((type) => Category, (category) => category.menu)
    category: Category;

    @CreateDateColumn() 
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
