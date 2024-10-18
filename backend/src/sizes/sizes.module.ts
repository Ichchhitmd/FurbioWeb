import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Size } from 'src/database/models/size.model';
import { SizeController } from './sizes.controller';
import { SizeService } from './sizes.service';

@Module({
  imports: [SequelizeModule.forFeature([Size])],
  controllers: [SizeController],
  providers: [SizeService],
})
export class SizesModule {}
