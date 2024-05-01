import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RequestService } from 'src/request.service';

@Module({
  imports:[DatabaseModule],
  controllers: [EmployeesController],
  providers: [EmployeesService, RequestService],
})
export class EmployeesModule {}
