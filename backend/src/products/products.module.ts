import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/database/models/product.model';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';
import { Color } from 'src/database/models/color.model';
import { Size } from 'src/database/models/size.model';
import { Tag } from 'src/database/models/tag.model';
import { Origin } from 'src/database/models/origin.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, Color, Size, Tag, Origin])],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
