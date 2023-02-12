import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UsersService } from './users.service';

import { UsersController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { UserDataModule } from 'src/user-data/user-data.module';

@Module({
  imports: [ UserDataModule, AuthModule],
  providers: [UsersService],
  exports:[UsersService],
  controllers: [UsersController]

})
export class UsersModule {}
