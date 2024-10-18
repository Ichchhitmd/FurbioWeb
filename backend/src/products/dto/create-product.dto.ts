// src/products/dto/create-product.dto.ts
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsArray()
  @IsOptional()
  image: string[];

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  size_id: number;

  @IsOptional()
  @IsNumber()
  color_id: number;

  @IsOptional()
  @IsNumber()
  tag_id: number;

  @IsOptional()
  @IsNumber()
  origin_id: number;

  @IsOptional()
  @IsString()
  model_number: string;

  @IsOptional()
  @IsString()
  material: string;

  @IsOptional()
  @IsString()
  shape: string;

  @IsOptional()
  @IsNumber()
  load_capacity: number;

  @IsOptional()
  @IsNumber()
  width: number;

  @IsOptional()
  @IsNumber()
  height: number;

  @IsOptional()
  @IsNumber()
  weight: number;
}
