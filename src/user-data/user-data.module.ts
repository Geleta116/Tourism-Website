import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDataController } from './user-data.controller';
import { UserDataService } from './user-data.service';
import { UserDataSchema } from './users-data.model';

@Module({
      imports: [MongooseModule.forFeature([{ name: "user", schema: UserDataSchema }])],
      providers: [UserDataService],
      exports:[UserDataService],
      controllers: [UserDataController] 
})
export class UserDataModule {


}
