import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { HotelSchema } from './schema/hotel.schema';
@Module({
    imports:[MongooseModule.forFeature([{name:'Hotel',schema:HotelSchema}])],
    controllers:[HotelsController],
    providers:[HotelsService]
})
export class HotelsModule {}
