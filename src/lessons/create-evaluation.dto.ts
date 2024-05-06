import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEvaluationDto {
  @IsString()
  @IsNotEmpty()
  score: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
