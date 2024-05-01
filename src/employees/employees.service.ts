import { DatabaseService } from './../database/database.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import {Prisma} from "@prisma/client"
import { RequestService } from 'src/request.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly requestService: RequestService,private readonly databaseService: DatabaseService) {}
  create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto 
    })
  }

  async findAll(role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
    const userId  = this.requestService.getUserId();
    console.log("userod---", {userId});
    
   if (role) return this.databaseService.employee.findMany({
      where: {role,}
    })
    return this.databaseService.employee.findMany()
  }

 async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {id,}
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto
    })
  }

  async remove(id: number) {
    return  this.databaseService.employee.delete({where: {
      id,
    }})
  }
}
