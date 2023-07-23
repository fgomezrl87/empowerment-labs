import { Injectable } from '@nestjs/common';
import { UserService } from '../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userId: string): Promise<any> {
    const user = await this.usersService.findOne(userId);
    return user ? user : null;
  }

  async login(userId: string) {
    const validUser = await this.validateUser(userId);
    if (!validUser) {
      return null;
    }
    const payload: JwtPayload = { userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
