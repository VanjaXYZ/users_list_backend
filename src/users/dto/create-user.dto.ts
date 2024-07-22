import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  MinLength,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required.' })
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  name: string;

  @IsNotEmpty({ message: 'Password is required.' })
  password: string;

  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, { message: 'Please provide a valid email.' })
  email: string;

  @IsNotEmpty({ message: 'Age is required.' })
  @IsNumber({}, { message: 'Age must be a number.' })
  @Min(0, { message: 'Age must be a positive number.' })
  age: number;

  @IsNotEmpty()
  @MinLength(2, { message: 'Job name must have at least 2 characters.' })
  job: string;

  @IsNotEmpty({ message: 'Work experience is required.' })
  @IsNumber({}, { message: 'Work experience must be a number.' })
  @Min(0, { message: 'Work experience must be a positive number.' })
  work_experience: number;

  @IsOptional()
  hobbies?: string[];

  @IsNotEmpty()
  role: string;
}
