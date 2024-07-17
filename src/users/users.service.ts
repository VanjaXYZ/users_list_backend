import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './interfaces/users.interface';
// import { users } from 'src/mock_data/users_default_data';

@Injectable()
export class UsersService {
  private users: Users[] = [
    {
      id: 1,
      name: 'Andy',
      age: 34,
      email: 'andy.eriksson@gmail.com',
    },
    {
      id: 2,
      name: 'George',
      age: 51,
      email: 'g.wolf@yahoo.com',
    },
    {
      id: 3,
      name: 'Dick',
      age: 22,
      email: 'dicken2033@gmail.com',
    },
  ];
  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
