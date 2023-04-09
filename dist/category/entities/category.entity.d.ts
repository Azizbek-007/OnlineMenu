import { Menu } from "src/menu/entities/menu.entity";
import { BaseEntity } from "typeorm";
export declare class Category extends BaseEntity {
    id: number;
    name: string;
    menu: Menu[];
    createdAt: Date;
    updatedAt: Date;
}
