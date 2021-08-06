import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create.dto";
import { User } from './schema/user.schema'

@Controller('users')
@ApiTags('User')
export class UsersController {
    constructor(private service:  UsersService) {}

    @Post("/create")
    async add(@Body() dto: CreateUserDto){
        return await this.service.create(dto)
    }

    @Get('all')
    async findAll(): Promise<User[]> {
        return this.service.findAll();
    }
}
