import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Color extends Model<Color> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  color_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color_name: string;
}
