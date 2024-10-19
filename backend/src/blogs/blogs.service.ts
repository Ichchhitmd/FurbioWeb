import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from 'src/database/models/blogs/blog.model';
import { CreateBlogDto } from './dto/create-blogs.dto';

@Injectable()
export class BlogsService {
    constructor(
        @InjectModel(Blog)
        private readonly blogModel: typeof Blog,
    ) {}

    async create(createBlogDto: CreateBlogDto): Promise<Blog> {
        return this.blogModel.create({ ...createBlogDto });
    }

    async findAll(): Promise<Blog[]> {
        return this.blogModel.findAll();
    }

    async findOne(id: number): Promise<Blog> {
            const blog = await this.blogModel.findByPk(id);
            if (!blog) {
                throw new NotFoundException(`Blog with id ${id} not found`);
            }
            return blog;
    }     
    
    async update(id: number, updateBlogDto: CreateBlogDto): Promise<Blog> {
            const blog = await this.findOne(id);
            return blog.update({ ...updateBlogDto });
    }

    async remove(id: number): Promise<void> {
        const blog = await this.findOne(id);
        await blog.destroy();
    }
        



}

