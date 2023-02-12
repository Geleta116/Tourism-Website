import { Controller, Get,Delete,Param,Body, Patch, Query, ValidationPipe} from '@nestjs/common';
import { CreateHotelDto} from './dto/create-hotel.dto';
import { HotelsService } from './hotels.service';
import { Hotel } from './interfaces/hotel.interface';
import { getHotelFilterDto } from './dto/filter-hotel.dto';

@Controller('hotels')
export class HotelsController {
    constructor(private readonly hotelService:HotelsService){}
    
    @Get()
    getHotels(@Query(ValidationPipe) filterDto:getHotelFilterDto):Promise<Hotel[]>{
        return this.hotelService.getHotels(filterDto)
    }

    @Get(':id')
    getOne(@Param('id') id):Promise<Hotel>{
        return this.hotelService.getOne(id);
    }

    @Patch(':id')
    update(@Body() updateHotelDto:CreateHotelDto,@Param('id') id):Promise<Hotel>{
        return this.hotelService.update(id,updateHotelDto)
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Hotel>{
        return this.hotelService.delete(id)
    }
    @Delete()
    deleteAll():Promise<any>{
        return this.hotelService.deleteAll()
    }
}
