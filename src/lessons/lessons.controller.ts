import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './create-lesson.dto';
import { CreateEvaluationDto } from './create-evaluation.dto';

@Controller('/api/lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  getAll() {
    return this.lessonsService.findAllWithEvaluations();
  }

  @Post()
  createLesson(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.createLesson(createLessonDto);
  }

  @Post('/:id/evaluations')
  createEvaluation(
    @Param('id') lesson_id: number,
    @Body() createEvaluationDto: CreateEvaluationDto,
  ) {
    return this.lessonsService.createEvaluation({
      ...createEvaluationDto,
      lesson_id,
    });
  }
}
