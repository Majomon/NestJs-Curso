import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiTags('Users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  @ApiTags('Users')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}
