import { IsNotEmpty, IsString } from "@nestjs/class-validator";


export class LoginDto{
      @IsString()
      @IsNotEmpty()
      public email: string;

      @IsString()
      @IsNotEmpty()
      public password: string;

      @IsString()
      public newPassword: string;
      
}