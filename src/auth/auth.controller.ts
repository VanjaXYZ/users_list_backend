import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  //   login(@Body() authPayload: AuthPayloadDto) {
  //     const user = this.authService.validateUser(authPayload);
  //     return user;
  //   }
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('user')
  @UseGuards(JwtAuthGuard) // in order to get data, bearer token must be presented in headers (this can be used on every route) === authorization
  user(@Req() req: Request) {
    return req.user;
  }
}
