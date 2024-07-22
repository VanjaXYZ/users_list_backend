import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  findAllUsers() {
    return this.userRepository.find();
  }

  async findOneUser(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findByUsername(name: any): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { name } });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.findOneUser(id);
  }

  removeUser(id: string): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
