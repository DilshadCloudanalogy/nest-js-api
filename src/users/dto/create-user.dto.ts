import {IsString, IsInt, IsEmail, IsNotEmpty, IsIn, MaxLength} from "class-validator"
export class CreateUserDto {
 @IsString()
 @IsNotEmpty()
 name: string;
 @IsInt()
 @MaxLength(3, { message: 'Age cannot be longer than $constraint1 characters' })
 age: number;
  @IsString()
  fatherName: string;
  @IsInt()
  id: number;
}

