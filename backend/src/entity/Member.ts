// src/entity/User.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;
}
