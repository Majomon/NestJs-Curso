import { Module } from '@nestjs/common';
import { TasksSModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [TasksSModule, UsersModule, HelloModule, PaymentsModule],
})

export class AppModule {}
