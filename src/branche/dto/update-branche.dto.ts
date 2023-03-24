import { PartialType } from '@nestjs/mapped-types';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { CreateBrancheDto } from './create-branche.dto';

export class UpdateBrancheDto extends PartialType(CreateBrancheDto) {
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    readonly adress: string;
}
