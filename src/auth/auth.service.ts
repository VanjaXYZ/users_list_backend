import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

const fakeUsers = [
  { id: 1, username: 'anson', password: 'password' },
  { id: 2, username: 'jack', password: 'password123' },
];

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser({
    username,
    password,
  }: AuthPayloadDto): Promise<string | null> {
    // console.log('USERS: ', this.usersService);
    // const findUser = fakeUsers.find((user) => user.username === username);
    const findUser = await this.usersService.findByUsername(username);
    if (!findUser) return null;
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
    return null;
  }
}
