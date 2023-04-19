import { Category } from "src/category/entities/category.entity";
import { Orderproduct } from "src/orderproducts/entities/orderproduct.entity";
import { BaseEntity } from "typeorm";
export declare class Menu extends BaseEntity {
    id: number;
    name: string;
    description: string;
    avatar: string;
    price: string;
    sale: number;
    category: Category;
    product: Orderproduct;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
