import { IsOptional, IsString } from "class-validator";

export class CreateCompanyDto {
    @IsString()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly avatar: string;
}
