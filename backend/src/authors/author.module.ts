import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from 'src/database/models/blogs/author.model';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';


@Module({
  imports: [SequelizeModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
