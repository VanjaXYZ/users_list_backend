import { IsEmail, IsNotEmpty, IsNumber, MinLength, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required.' })
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  name: string;

  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Please provide a valid email.' })
  email: string;

  @IsNotEmpty({ message: 'Age is required.' })
  @IsNumber({}, { message: 'Age must be a number.' })
  @Min(0, { message: 'Age must be a positive number.' })
  age: number;
}
