import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {UserSchema, User} from "./schema/user.schema";
import { UsersController } from './users.controller';

@Module({

  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{name:'User', schema: UserSchema}])],
})
export class UsersModule {}
