import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDataService } from 'src/user-data/user-data.service';
import { LoginDto } from './dto/login.dto';
import { signupDto } from './dto/signup.dto';
import { Role } from './enums/role.enum';

export type User = any;

@Injectable()
export class UsersService {

  private readonly users: User[];
  constructor(private userDataService:UserDataService){
  }
  async insertUser(  
    signUpDto:signupDto
    )
    {
    const email = signUpDto.email
    if (email === "admin@email.com"){
      const result = this.userDataService.createDefaultAdmin(signUpDto)
      return result
    }
    else{
    const result =  this.userDataService.insertUser(signUpDto)
      return result}
  }

  async delete_user(email:string){
    const deleted_user = this.userDataService.delete_user(email)
    return deleted_user

  }

  async update_password(loginDto: LoginDto)
  {
    return this.userDataService.update_password(loginDto)
  }

  async get_all_users(){
    return this.userDataService.get_all_users();
  }

  async get_user(email:string){
      return this.userDataService.get_user(email)
  }

}


