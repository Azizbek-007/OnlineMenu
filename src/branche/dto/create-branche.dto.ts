import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateBrancheDto {
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    readonly adress: string;
}
