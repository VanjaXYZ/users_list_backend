import { IsEmail, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(2, { message: 'name must have atleast 2 characters.' })
  name: string;

  @IsEmail(null, { message: 'Please provide valid email.' })
  email: string;

  @IsNumber()
  age: number;

  // @IsNumber()
  // id: number;
}
