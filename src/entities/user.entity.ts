import { IsEmail, IsNotEmpty } from 'class-validator';
import { OneToMany, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Evaluation } from './evaluation.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToMany(() => Evaluation, (evaluations) => evaluations.user)
  evaluations: Evaluation[];
}
