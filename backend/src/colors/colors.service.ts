// src/colors/color.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Color } from '../database/models/color.model';
import { CreateColorDto } from './dto/create-color.dto';

@Injectable()
export class ColorService {
  constructor(
    @InjectModel(Color)
    private readonly colorModel: typeof Color,
  ) {}

  async create(createColorDto: CreateColorDto): Promise<Color> {
    return this.colorModel.create(createColorDto);
  }

  async findAll(): Promise<Color[]> {
    return this.colorModel.findAll();
  }

  async findOne(id: number): Promise<Color> {
    const color = await this.colorModel.findByPk(id);
    if (!color) {
      throw new NotFoundException(`Color with id ${id} not found`);
    }
    return color;
  }

  async update(id: number, updateColorDto: CreateColorDto): Promise<Color> {
    const color = await this.findOne(id);
    return color.update(updateColorDto);
  }

  async remove(id: number): Promise<void> {
    const color = await this.findOne(id);
    await color.destroy();
  }
}
