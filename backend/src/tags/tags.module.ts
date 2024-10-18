import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tag } from 'src/database/models/tag.model';
import { TagController } from './tags.controller';
import { TagService } from './tags.service';

@Module({
  imports: [SequelizeModule.forFeature([Tag])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagsModule {}
