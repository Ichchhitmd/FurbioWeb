import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/sequelize.module';
import { UsersModule } from './users/users.module';
import { ColorsModule } from './colors/colors.module';
import { OriginsModule } from './origins/origins.module';
import { SizesModule } from './sizes/sizes.module';
import { TagsModule } from './tags/tags.module';
import { ProductsModule } from './products/products.module';
import { BlogsModule } from './blogs/blogs.module';
import { AuthorModule } from './authors/author.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    ColorsModule,
    OriginsModule,
    SizesModule,
    TagsModule,
    ProductsModule,
    BlogsModule,
    AuthorModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
