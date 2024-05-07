import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from 'src/entities/lesson.entity';
import { Evaluation } from 'src/entities/evaluation.entity';
import { CreateLessonDto } from './dtos/create-lesson.dto';
import { CreateEvaluationDto } from './dtos/create-evaluation.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
    @InjectRepository(User)
    private readonly UserRepository: Repository<Evaluation>,
  ) {}

  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    return this.lessonRepository.save(createLessonDto);
  }

  async createEvaluation(
    createEvaluationDto: CreateEvaluationDto & { lesson_id: number },
  ): Promise<Evaluation> {
    const user = await this.UserRepository.findOneBy({
      id: createEvaluationDto.userId,
    });

    if (!user) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        errors: {
          userId: 'InvalidUserId',
        },
      });
    }

    return this.evaluationRepository.save(createEvaluationDto);
  }

  async findAllWithEvaluations(): Promise<Lesson[]> {
    return await this.lessonRepository
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.evaluations', 'evaluation')
      .leftJoinAndSelect('evaluation.user', 'user')
      .select([
        'lesson.id',
        'lesson.name',
        'lesson.code',
        'evaluation.id',
        'evaluation.score',
        'user.id',
        'user.name',
        'user.email',
      ])
      .getMany();
  }
}
