import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@ValidatorConstraint({ name: 'isUserAlreadyExist', async: true })
@Injectable()
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validate(phone: string): Promise<boolean> {
    const user = await this.userRepository.findOneBy({ phone });

    return user === null || user === undefined;
  } 

  defaultMessage(): string {
    return 'The phone «$value» is already register.';
  }
}
