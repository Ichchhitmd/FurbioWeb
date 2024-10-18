import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Size } from './size.model'; // Example, assuming you have a Size model
import { Color } from './color.model'; // Example, assuming you have a Color model
import { Tag } from './tag.model'; // Example, assuming you have a Tags model
import { Origin } from './origin.model'; // Example, assuming you have an Origin model

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  product_id: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
  })
  image: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => Size)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  size_id: number;

  @ForeignKey(() => Color)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  color_id: number;

  @ForeignKey(() => Tag)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  tags_id: number;

  @ForeignKey(() => Origin)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  origin_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  model_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  material: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  shape: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  load_capacity: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  width: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  height: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  weight: number;

  @BelongsTo(() => Size)
  size: Size;

  @BelongsTo(() => Color)
  color: Color;

  @BelongsTo(() => Tag)
  tag: Tag;

  @BelongsTo(() => Origin)
  origin: Origin;
}
