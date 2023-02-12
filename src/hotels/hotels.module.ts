import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import {MongooseModule} from '@nestjs/mongoose';

import { HotelSchema } from './schema/hotel.schema';


@Module({
  imports:[MongooseModule.forFeature([{name:'Hotel',schema:HotelSchema}])],
  providers: [HotelsService],
  controllers: [HotelsController]
})
export class HotelsModule {}
