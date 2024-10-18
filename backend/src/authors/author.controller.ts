import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

  
  @Controller('authors')
  export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}
  
    @Post()
    async create(@Body() createAuthorDto: CreateAuthorDto) {
      return this.authorService.create(createAuthorDto);
    }
  
    @Get()
    findAll() {
      return this.authorService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.authorService.findOne(id);
    }
  
    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateAuthorDto: CreateAuthorDto) {
      return this.authorService.update(id, updateAuthorDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number) {
      return this.authorService.remove(id);
    }
  }
  