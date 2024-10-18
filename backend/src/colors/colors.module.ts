import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Color } from 'src/database/models/color.model';
import { ColorService } from './colors.service';
import { ColorController } from './colors.controller';

@Module({
  imports: [SequelizeModule.forFeature([Color])],
  providers: [ColorService],
  controllers: [ColorController],
  exports: [ColorService],
})
export class ColorsModule {}
