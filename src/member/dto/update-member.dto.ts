import { IsOptional } from 'class-validator';
import { CreateMemberDto } from './create-member.dto';

export class UpdateMemberDto extends CreateMemberDto {

    @IsOptional()
    lang: string;

    @IsOptional()
    phone_number: string;
}
