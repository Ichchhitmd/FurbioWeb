import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Origin } from 'src/database/models/origin.model';
import { OriginController } from './origins.controller';
import { OriginService } from './origins.service';

@Module({
  imports: [SequelizeModule.forFeature([Origin])],
  controllers: [OriginController],
  providers: [OriginService],
})
export class OriginsModule {}
