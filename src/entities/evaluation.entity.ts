import { IsNotEmpty } from 'class-validator';
import { ManyToOne, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from './user.entity';
import { Lessen } from './lessen.entity';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  score: string;

  @ManyToOne(() => User, (user) => user.evaluations)
  user: User;

  @ManyToOne(() => Lessen, (user) => user.evaluations)
  lessen: Lessen;
}
