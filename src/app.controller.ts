import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { Role } from './users/enums/role.enum';
import { Roles } from './users/roles.decorators';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
 


}
