import { IsNotEmpty, IsString } from "@nestjs/class-validator";


export class signupDto{
      @IsString()
      @IsNotEmpty()
      public firstname: string;

      @IsString()
      @IsNotEmpty()
      public lastname: string;

      @IsString()
      @IsNotEmpty()
      public password: string;

      @IsString()
      @IsNotEmpty()
      public email: string;

      @IsString()
      public role: string;
}

