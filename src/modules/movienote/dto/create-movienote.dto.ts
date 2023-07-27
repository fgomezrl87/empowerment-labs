import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovienoteDto {
  @IsNotEmpty()
  @IsNumber()
  movieId: number;
  
  @IsNotEmpty()
  @IsString()
  noteTitle: string;
  
  @IsNotEmpty()
  @IsString()
  description: string;
}
