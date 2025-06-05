import {
  Get,
  Param,
  Controller,
  Post,
  Body,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './user.service'; // correct name
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // use correct class

  // @Post()
  // Create(@Body() userData: Partial<User>) {
  //   return this.usersService.create(userData);
  // }

  @Get()
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findUser(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  // @Post('/')
  // Create(@Body() userData: Partial<User>) {
  //   return this.usersService.create(userData);
  // }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
}

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() body: Partial<User>) {
    return this.usersService.update(+id, body);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
