import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from 'src/database/models/blogs/category.model';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
    imports: [SequelizeModule.forFeature([Category])],
    controllers: [CategoriesController],
    providers: [CategoriesService],
})
export class CategoriesModule {}
