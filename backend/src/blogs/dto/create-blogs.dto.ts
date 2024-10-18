import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBlogDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsArray()
    @IsString()
    image: string[]

    @IsNotEmpty()
    @IsNumber()
    author_id: number;

    @IsNotEmpty()
    @IsNumber()
    category_id: number
}