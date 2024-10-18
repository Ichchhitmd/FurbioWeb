import {
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
  import { Author } from './author.model';
  import { Category } from './category.model';
  
  @Table
  export class Blog extends Model<Blog> {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    })
    blog_id: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    title: string;
  
    @Column({
      type: DataType.TEXT,
      allowNull: false,
    })
    content: string;
  
    @Column({
      type: DataType.ARRAY(DataType.STRING),
      allowNull: true,
    })
    image: string[];
  
    @ForeignKey(() => Author)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    author_id: number;
  
    @BelongsTo(() => Author)
    author: Author;
  
    @ForeignKey(() => Category)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    category_id: number;
  
    @BelongsTo(() => Category)
    category: Category;
  }
  