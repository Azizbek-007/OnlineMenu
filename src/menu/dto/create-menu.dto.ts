import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
import { Category } from "src/category/entities/category.entity";

export class CreateMenuDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly descrcripton: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    avatar: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly price: string;

    @IsOptional()
    @IsNumber()
    readonly sale: number;

    @IsNumber()
    readonly category: Category;
}
