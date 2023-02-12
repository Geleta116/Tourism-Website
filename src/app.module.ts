import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import config from './config/mongo.keys'
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [HotelsModule,MongooseModule.forRoot(config.mongoURi)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
