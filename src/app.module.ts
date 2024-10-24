import { Module } from '@nestjs/common';
import { TasksSModule } from './tasks/tasks.module';


@Module({
  imports: [TasksSModule],
})

export class AppModule {}
