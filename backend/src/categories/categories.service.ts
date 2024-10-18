import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/database/models/blogs/category.model';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category)
        private categoryModel: typeof Category
    ) {}

    async create(createCategoryDto: any): Promise<Category> {
        return this.categoryModel.create(createCategoryDto);
    }

    async findAll(): Promise<Category[]> {
        return this.categoryModel.findAll();
    }

    async findOne(id: number): Promise<Category> {
        const categories = await this.categoryModel.findByPk(id);
        if (!categories) {
            throw new NotFoundException(`Category with id ${id} not found`);
        }
        return categories;
    }

    async update (id: number, updateCategoryDto: any): Promise<Category> {
        const category = await this.findOne(id);
        return category.update({ ...updateCategoryDto });
    }

    async remove(id: number): Promise<void> {
        const category = await this.findOne(id);
        await category.destroy();
    }
}
