import { Module } from '@nestjs/common';
import { TasksSModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';


@Module({
  imports: [TasksSModule, UsersModule, HelloModule],
})

export class AppModule {}
