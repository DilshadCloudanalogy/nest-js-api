import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/interfaces/users.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { name: 'Dilshad', age: 25, fatherName: 'AtAnsari', id: 1 },
  ];
  create(user: User) {
    this.users.push(user);
  }
  getUsers(id?: number): User[] {
    const user =  id ? this.users.filter((item) => item.id === id) : this.users;
    if (!user.length) throw new NotFoundException('User not Found')
    return user
  }
}
