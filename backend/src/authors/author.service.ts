import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Author } from 'src/database/models/blogs/author.model';
import { CreateAuthorDto } from './dto/create-author.dto';


@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author)
    private authorModel: typeof Author,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorModel.create(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return this.authorModel.findAll();
  }

  async findOne(id: number): Promise<Author> {
    const author = await this.authorModel.findByPk(id);
    if (!author) {
      throw new NotFoundException('Author not found');
    }
    return author;
  }

  async update(id: number, updateAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = await this.findOne(id);
    return author.update(updateAuthorDto);
  }

  async remove(id: number): Promise<void> {
    const author = await this.findOne(id);
    await author.destroy();
  }
}
