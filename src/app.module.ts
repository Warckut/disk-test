import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';
import { Lesson } from './entities/lesson.entity';
import { Evaluation } from './entities/evaluation.entity';
import { UserModule } from './user/user.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PROT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Lesson, Evaluation],
      synchronize: true,
    }),
    UserModule,
    LessonsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
