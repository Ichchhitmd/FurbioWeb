import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Blog } from './blog.model';

@Table
export class Author extends Model<Author> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      })
    author_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    bio: string;

    @HasMany(() => Blog)
    blogs: Blog[]
}