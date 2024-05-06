import { IsNotEmpty } from 'class-validator';
import {
  ManyToOne,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Lesson } from './lesson.entity';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  score: string;

  @Column()
  user_id: number;

  @ManyToOne(() => User, (user) => user.evaluations)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  lesson_id: number;

  @ManyToOne(() => Lesson, (user) => user.evaluations)
  @JoinColumn({ name: 'lesson_id' })
  lesson: Lesson;
}
