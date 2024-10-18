// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../database/models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
