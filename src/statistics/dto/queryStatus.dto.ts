import { IsDate, IsDateString, IsEnum, IsNumber, IsOptional } from "class-validator";

export class StaticQuery {

    @IsDateString()
    start: Date

    @IsDateString()
    end: Date
}
