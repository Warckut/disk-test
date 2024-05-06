import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from 'src/entities/lesson.entity';
import { Evaluation } from 'src/entities/evaluation.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Evaluation, User])],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
