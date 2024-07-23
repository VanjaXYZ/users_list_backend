import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

export const Config = {
  jwtSecret: () => {
    return 'OAaFbjJM7HLOtLkA6CgUwWlJVf57pAVX2ZpCnDU1laye7ToJMJ6hzErjkbAHDtYCw7SrBARGVkRqTA6poyf3yKsTis727LTUCJXw'.toString();
  },
};

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: `${Config.jwtSecret()}`,
      // secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
