// src/sizes/size.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Size } from '../database/models/size.model';
import { CreateSizeDto } from './dto/create-size.dto';

@Injectable()
export class SizeService {
  constructor(
    @InjectModel(Size)
    private readonly sizeModel: typeof Size,
  ) {}

  async create(createSizeDto: CreateSizeDto): Promise<Size> {
    return this.sizeModel.create({ ...createSizeDto });
  }

  async findAll(): Promise<Size[]> {
    return this.sizeModel.findAll();
  }

  async findOne(id: number): Promise<Size> {
    const size = await this.sizeModel.findByPk(id);
    if (!size) {
      throw new NotFoundException(`Size with id ${id} not found`);
    }
    return size;
  }

  async update(id: number, updateSizeDto: CreateSizeDto): Promise<Size> {
    const size = await this.findOne(id);
    return size.update({ ...updateSizeDto });
  }

  async remove(id: number): Promise<void> {
    const size = await this.findOne(id);
    await size.destroy();
  }
}
