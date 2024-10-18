import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  tag_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tag_name: string;
}
