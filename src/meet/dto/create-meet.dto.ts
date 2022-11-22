import { IsDate, IsDateString, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateMeetDto {

    @IsString()
    @IsNotEmpty()
    details: string
    
    @IsString()
    @IsNotEmpty()
    coordinates: string

    @IsDateString()
    @IsNotEmpty()
    meet: Date

    @IsNotEmpty()
    @IsInt()
    creature_id: Number
}
