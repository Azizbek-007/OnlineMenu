import { IsArray, IsNumber, IsString } from "class-validator";
import { Member } from "src/member/entities/member.entity";

export class CreateOrderDto {

    @IsString()
    member: string;

    @IsString()
    address: string;

    @IsString()
    comment: string;

    @IsArray()
    orders: string[];

    @IsNumber()
    total_price: number;
}
 