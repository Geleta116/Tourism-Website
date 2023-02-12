import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDataService } from 'src/user-data/user-data.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersDataService: UserDataService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
   
   
    const user = await this.usersDataService.getUser(email);
   
    const passwordValid = await bcrypt.compare(pass, user.password)
    
    
    if (user && passwordValid) {
      const { password, ...result } = user;
      
      return result;
   
    }
    return null;
  }

  async login(user: any) {
   
    const payload = { email: user._doc.email, sub: user._doc._id, role: user._doc.role };
    
    
    return {
      access_token: this.jwtService.sign(payload),
      
    };
  }
}
