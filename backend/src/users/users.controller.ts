// src/users/users.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../database/models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
