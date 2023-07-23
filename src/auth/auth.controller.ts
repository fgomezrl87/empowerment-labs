import { Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    const userId = req.body.userId;
    const token = await this.authService.login(userId);
    if (!token) {
      throw new UnauthorizedException('User does not exist');
    }
    return token;
  }
}
