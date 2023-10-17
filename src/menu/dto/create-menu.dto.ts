import { IsNotEmpty, IsNumberString, IsString } from "class-validator"
import { Category } from "src/category/entities/category.entity";

export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsNotEmpty()
  @IsString()
  readonly description: string

  avatar: string;

  @IsNotEmpty()
  @IsString()
  readonly price: string;

  @IsNumberString()
  readonly sale: number;

  @IsNumberString()
  readonly category: Category;
}
