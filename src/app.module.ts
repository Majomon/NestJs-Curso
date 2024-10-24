import { Module } from '@nestjs/common';
import { TasksSModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [TasksSModule, UsersModule],
})

export class AppModule {}
