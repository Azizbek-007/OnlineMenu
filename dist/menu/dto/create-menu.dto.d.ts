import { Category } from "src/category/entities/category.entity";
export declare class CreateMenuDto {
    readonly name: string;
    readonly descrcripton: string;
    avatar: string;
    readonly price: string;
    readonly sale: number;
    readonly category: Category;
}
