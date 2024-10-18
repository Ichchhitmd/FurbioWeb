import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Blog } from './blog.model';

@Table
export class Category extends Model<Category> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    category_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;
   
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @HasMany(() => Blog)
    blogs: Blog[]
}