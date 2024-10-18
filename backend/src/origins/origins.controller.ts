// src/origins/origin.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { OriginService } from './origins.service';
import { CreateOriginDto } from './dto/create-origin.dto';

@Controller('origins')
export class OriginController {
  constructor(private readonly originService: OriginService) {}

  @Post()
  create(@Body() createOriginDto: CreateOriginDto) {
    return this.originService.create(createOriginDto);
  }

  @Get()
  findAll() {
    return this.originService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.originService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateOriginDto: CreateOriginDto) {
    return this.originService.update(id, updateOriginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.originService.remove(id);
  }
}
