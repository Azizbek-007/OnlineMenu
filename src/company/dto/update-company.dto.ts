import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
    @IsString()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly avatar: string;
}
