import { Menu } from "src/menu/entities/menu.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string

    @OneToMany(type => Menu, menu => menu.category) 
    menu: Menu[];  

    @CreateDateColumn() 
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
