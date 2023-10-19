import { IsBase64, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator"
import { Category } from "src/category/entities/category.entity";

export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsNotEmpty()
  @IsString()
  readonly description: string

  @IsNotEmpty()
  @IsBase64()
  avatar: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: string;

  @IsNumber()
  readonly sale: number;

  @IsNumber()
  readonly category: Category;
}
