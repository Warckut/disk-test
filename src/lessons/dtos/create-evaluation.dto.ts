import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEvaluationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  score: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
