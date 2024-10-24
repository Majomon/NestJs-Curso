import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Jane',
      email: 'jane@example.com',
    },
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    
    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
