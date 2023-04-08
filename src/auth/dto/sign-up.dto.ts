import {
  IsDefined,
  IsNotEmpty,
  MinLength,
  Validate,
  IsPhoneNumber,
  IsEnum,
  IsOptional,
  IsString,
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


  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly restoran_name: string;

  @IsNotEmpty()
  @IsDefined()
  @IsEnum(Role)
  readonly role: Role;
}

