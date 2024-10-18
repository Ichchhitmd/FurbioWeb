// src/origins/origin.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Origin } from '../database/models/origin.model';
import { CreateOriginDto } from './dto/create-origin.dto';

@Injectable()
export class OriginService {
  constructor(
    @InjectModel(Origin)
    private readonly originModel: typeof Origin,
  ) {}

  async create(createOriginDto: CreateOriginDto): Promise<Origin> {
    return this.originModel.create({ ...createOriginDto });
  }

  async findAll(): Promise<Origin[]> {
    return this.originModel.findAll();
  }

  async findOne(id: number): Promise<Origin> {
    const origin = await this.originModel.findByPk(id);
    if (!origin) {
      throw new NotFoundException(`Origin with id ${id} not found`);
    }
    return origin;
  }

  async update(id: number, updateOriginDto: CreateOriginDto): Promise<Origin> {
    const origin = await this.findOne(id);
    return origin.update({ ...updateOriginDto });
  }

  async remove(id: number): Promise<void> {
    const origin = await this.findOne(id);
    await origin.destroy();
  }
}
