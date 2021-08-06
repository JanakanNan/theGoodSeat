import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./schema/user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private useModel: Model<UserDocument>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.useModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.useModel.find().exec();
    }

    async findOne(query, projection = {}) {
        return this.useModel.find(query, projection);
    }
}
