import { IsBase64, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator"
import { Category } from "src/category/entities/category.entity";

export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsOptional()
  @IsString()
  readonly description: string

  @IsNotEmpty()
  @IsString()
  avatar: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: string;

  @IsNumber()
  readonly sale: number;

  @IsNumber()
  readonly category: Category;
}
