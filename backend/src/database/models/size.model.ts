import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Size extends Model<Size> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  size_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  size_name: string;
}
