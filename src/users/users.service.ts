import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
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
}
