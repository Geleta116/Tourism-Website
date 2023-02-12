import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from 'src/users/dto/login.dto';
import { signupDto } from 'src/users/dto/signup.dto';
import { User } from './users-data.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserDataService {
      
  private readonly users: User[];

  constructor(@InjectModel('user') private readonly userdataModel: Model<User>) {}
  async insertUser(

      signUpDto:signupDto
      ) {
    const email = signUpDto.email.toLowerCase();
    signUpDto.role = "user"
    const newUser = new this.userdataModel( signUpDto );
    await newUser.save();
    
    return newUser;
  }
  async findOne(email): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
  async getUser(email) {
    
    const useremail = email.toLowerCase();
  
    const user = await this.userdataModel.findOne({ email:useremail });
   
    return user;
  }

  async delete_user(email): Promise<User | undefined> {
    const useremail = email.toLowerCase();
    const user = await this.userdataModel.findOneAndDelete({ email:useremail });
    return user;
  }
  async get_user(email){
    const useremail = email.toLowerCase();
    const user = await this.userdataModel.findOne({ email:useremail });
    return user;
  }

async get_all_users(){
  const allUsers = await this.userdataModel.find({})
  return allUsers
}
async update_password(logindto: LoginDto): Promise<User | undefined> {
  const user = await this.getUser(logindto.email);
   
  const passwordValid = await bcrypt.compare(logindto.password, user.password)
  if (user && passwordValid) {
    
    const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(logindto.newPassword, saltOrRounds);
        logindto.newPassword = hashedPassword
    return this.userdataModel.findOneAndUpdate({email:logindto.email}, {password:logindto.newPassword},{new: true})
    
  
  }
    
      
}

async createDefaultAdmin(signUpDto:signupDto): Promise<User> {
  const defaultAdmin = await this.userdataModel.findOne({email:"admin@email.com"});

  if (!defaultAdmin) {
    signUpDto.role = "Admin";
    const newAdmin = new this.userdataModel( signUpDto );
    await newAdmin.save();
    return newAdmin;
    
    }
    
  }
}







