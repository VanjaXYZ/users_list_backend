import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './interfaces/users.interface';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// import { users } from 'src/mock_data/users_default_data';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
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
  createUser(createUserDto: CreateUserDto) {
    const user: User = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    user.email = createUserDto.email;
    return this.userRepository.save(user);
  }

  findAllUsers() {
    return this.userRepository.find();
  }

  findOneUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;
    user.email = updateUserDto.email;
    user.id = id;
    return this.userRepository.save(user);
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
