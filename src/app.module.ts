import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HotelsModule } from './hotels/hotels.module';
import config from './config/mongo.keys'


@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRoot(config.mongoURi ),
    HotelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
