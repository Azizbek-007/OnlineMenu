import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    readonly name: string
}
