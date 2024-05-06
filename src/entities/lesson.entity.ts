import { IsNotEmpty } from 'class-validator';
import { OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Evaluation } from './evaluation.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  code: string;

  @OneToMany(() => Evaluation, (evaluations) => evaluations.lesson)
  evaluations: Evaluation[];
}
