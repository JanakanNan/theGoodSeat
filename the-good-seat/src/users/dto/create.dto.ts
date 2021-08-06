import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator"
export class CreateUserDto{
    @IsNotEmpty()
    @ApiProperty()
    lastName: string;

    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @ApiProperty()
    password: string;

    @IsNotEmpty()
    @ApiProperty()
    email: string;



}