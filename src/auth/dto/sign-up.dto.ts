import {
  IsDefined,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Validate,
  IsPhoneNumber,
  IsEnum,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Role } from 'src/user/utils/role.enum';
import { IsUserAlreadyExist } from '../../user/is-user-already-exist.validator';

export class SignUp {
  @IsDefined()
  @IsNotEmpty()
  readonly name: string;

  @IsDefined()
  @IsPhoneNumber('UZ')
  @Validate(IsUserAlreadyExist)
  readonly phone: string;

  @IsDefined()
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;

  @IsNotEmpty()
  @IsDefined()
  @IsEnum(Role)
  readonly role: Role;

  @IsOptional()
  @IsNumber()
  readonly branche: number;

  @IsOptional()
  @IsNumber()
  readonly company: number;
}

