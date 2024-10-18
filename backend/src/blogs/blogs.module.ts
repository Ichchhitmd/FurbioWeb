import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from 'src/database/models/blogs/blog.model';
import { Author } from 'src/database/models/blogs/author.model';
import { Category } from 'src/database/models/blogs/category.model';
import { BlogsService } from './blogs.service';

@Module({
  imports: [SequelizeModule.forFeature([Blog, Author, Category])],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}
