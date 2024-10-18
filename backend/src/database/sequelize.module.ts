// src/database/sequelize.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as dotenv from 'dotenv';
import { Product } from './models/product.model';
import { Color } from './models/color.model';
import { Size } from './models/size.model';
import { Tag } from './models/tag.model';
import { Origin } from './models/origin.model';
import { Sequelize } from 'sequelize';
dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [User, Product, Color, Size, Tag, Origin], // Add your models here
      autoLoadModels: true,
      synchronize: false, // Enable this only in development
    }),
    SequelizeModule.forFeature([User, Product, Color, Size, Tag, Origin]),
  ],
})
export class DatabaseModule {}
