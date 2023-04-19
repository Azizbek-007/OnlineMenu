import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional } from 'class-validator';
import { Status } from '../util/status.enum';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto {

    @IsEnum(Status)
    status: Status;
}
