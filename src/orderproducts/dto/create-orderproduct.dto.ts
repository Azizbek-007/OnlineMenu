import { IsNumber } from "class-validator";

export class CreateOrderproductDto {
    @IsNumber()
    orderId: number;

    @IsNumber()
    menuId: number;

    @IsNumber()
    count: number;
}
