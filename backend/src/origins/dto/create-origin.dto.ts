import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOriginDto {
  @IsNotEmpty()
  @IsString()
  origin_name: string;
}
