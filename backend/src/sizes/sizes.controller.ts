// src/sizes/size.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { SizeService } from './sizes.service';
import { CreateSizeDto } from './dto/create-size.dto';

@Controller('sizes')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Post()
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.sizeService.create(createSizeDto);
  }

  @Get()
  findAll() {
    return this.sizeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sizeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSizeDto: CreateSizeDto) {
    return this.sizeService.update(id, updateSizeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sizeService.remove(id);
  }
}
