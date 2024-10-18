import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Test extends Model<Test> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  test_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  test_name: string;
}
