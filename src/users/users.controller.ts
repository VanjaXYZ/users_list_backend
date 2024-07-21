import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('Received data:', createUserDto); // Dodaj ovaj log
    try {
      const data = await this.usersService.createUser(createUserDto);
      return {
        success: true,
        data,
        message: 'User Created Successfully',
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.message || 'Failed to create user',
      };
    }
  }

  @Get()
  async findAll() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOneUser(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const data = await this.usersService.updateUser(id, updateUserDto);
      return {
        success: true,
        data,
        message: 'User Updated Successfully',
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.message || 'Failed to update user',
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.usersService.removeUser(id);
      return {
        success: result.affected > 0,
        message:
          result.affected > 0 ? 'User Deleted Successfully' : 'User Not Found',
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.message || 'Failed to delete user',
      };
    }
  }
}
