import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import {ThrottlerModule, ThrottlerGuard}  from "@nestjs/throttler"
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { AuthenTicationMiddleWare } from './middleWare/authentication.middleware';
import { RequestService } from './request.service';
@Module({
  imports: [
    UsersModule, 
    DatabaseModule,
     EmployeesModule, ThrottlerModule.forRoot([{
      name: 'short',
      ttl:1000,
      limit: 3
     },{
      name: 'long',
      ttl:60000,
      limit: 100
     }
    ]), MyLoggerModule],
  controllers: [AppController],
  providers: [AppService, RequestService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenTicationMiddleWare).forRoutes("*")
  }
}