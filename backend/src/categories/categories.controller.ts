import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoriesDto } from './dto/create-categories.dto';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoryService: CategoriesService) {}


    @Post()
    async create(@Body() createCategoryDto: CreateCategoriesDto) {
        return this.categoryService.create(createCategoryDto);
    }

    @Get()
    async findAll() {
        return this.categoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.categoryService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateCategoryDto: CreateCategoriesDto) {
        return this.categoryService.update(id, updateCategoryDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.categoryService.remove(id);
    }
}
