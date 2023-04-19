import { IsEnum, IsNumber, IsOptional } from "class-validator";
import { Status } from "../util/status.enum";

export class StatusDto {

    @IsEnum(Status)
    status: Status;

    @IsOptional()
    take: number;

    @IsOptional()
    page: number;
}
