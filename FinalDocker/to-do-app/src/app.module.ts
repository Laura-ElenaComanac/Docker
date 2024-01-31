import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    InMemoryDBModule.forRoot(),
    TodoModule,
    CoreModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
