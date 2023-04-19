import { IsOptional, IsString } from "class-validator";
import { Order } from "src/order/entities/order.entity"

export class CreateMemberDto {

    @IsOptional()
    @IsString()
    user_id: string;

    @IsOptional()
    @IsString()
    full_name: string;

}
