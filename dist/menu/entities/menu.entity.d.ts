import { Category } from "src/category/entities/category.entity";
import { BaseEntity } from "typeorm";
export declare class Menu extends BaseEntity {
    id: number;
    name: string;
    description: string;
    avatar: string;
    price: string;
    sale: number;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}
