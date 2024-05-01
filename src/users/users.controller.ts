import { Body, Controller, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { get } from 'http';
import { User } from 'src/interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { query } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  /*
 GET /users
 GET /users/:id
 POST /users
 PATCH /users/:id
 DELETE /users/:id

 */
  @Get() // GET /users or users?role= value&age=25
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): User[] {
    return this.userService.getUsers();
  }
  
  @Get(':id/') //GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) {

    return this.userService.getUsers(id);
  }
  @Post()
  async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
    return this.findAll();
  }
  @Patch('id')
  async update(@Param('id') id: string, @Body() userUpdateDto: UpdateUserDto) {
      return {id, ...userUpdateDto}
  }
}
