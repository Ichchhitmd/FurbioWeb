import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Origin extends Model<Origin> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  origin_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  origin_name: string;
}
