import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/middleware/multerMiddleware';
import { CreateBlogDto } from './dto/create-blogs.dto';

@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image', multerOptions('blogs')))
    async createBlog(
        @Body() createBlogDto: CreateBlogDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        if (file) {
            createBlogDto.image = [file.filename]; 
        }
        return this.blogsService.create(createBlogDto);
    }

    @Get()
    findAll(){
        return this.blogsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.blogsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateBlogDto: CreateBlogDto){
        return this.blogsService.update(id, updateBlogDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.blogsService.remove(id);
    }

    
}
