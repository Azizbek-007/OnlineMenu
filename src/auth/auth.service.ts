import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '../user/entities/user.entity';
import { SignUp } from './dto/sign-up.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from '../user/user.service';
import { BrancheService } from 'src/branche/branche.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly brancheService: BrancheService,
    private readonly jwtService: JwtService,
  ) {}

  async register(signUp: SignUp): Promise<User> {
    const user = await this.userService.create(signUp);
    delete user.password;

    return user;
  }

  async login(phone: string, password: string): Promise<User> {
    let user: User;

    try {
      user = await this.userService.findOne({ where: { phone } });
    } catch (err) {
      throw new UnauthorizedException(
        `There isn't any user with phone: ${phone}`,
      );
    }

    if (!(await user.checkPassword(password))) {
      throw new UnauthorizedException(
        `Wrong password for user with phone: ${phone}`,
      );
    }
    delete user.password;

    return user;
  }

  async verifyPayload(payload: JwtPayload): Promise<User> {
    let user: User;

    try {
      user = await this.userService.findOne({ where: { phone: payload.sub } });

    } catch (error) {
      throw new UnauthorizedException(
        `There isn't any user with phone: ${payload.sub}`,
      );
    }
    delete user.password;

    return user;
  }

  signToken(user: User): string {
    const payload = {
      sub: user.phone,
      role: user.role
    };

    return this.jwtService.sign(payload);
  }
}
