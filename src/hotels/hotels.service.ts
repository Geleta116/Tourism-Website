import { Injectable } from '@nestjs/common';
import {Hotel} from './interfaces/hotel.interface'
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'
import { getHotelFilterDto } from './dto/filter-hotel.dto';


@Injectable()
export class HotelsService {
    constructor(@InjectModel('Hotel') private readonly hotelModel:Model<Hotel>){}
   
    async getHotels(filterDto:getHotelFilterDto):Promise<Hotel[]>{
        let options = {}
        const {tourismSite} = filterDto
        if (tourismSite){
            options={
                tourismSite:tourismSite
            }
        }
        return await this.hotelModel.find(options);
    }

    async getOne(id:string):Promise<Hotel>{
        return await this.hotelModel.findOne({_id:id});
    }

    async delete(id:string):Promise<Hotel>{
        return await this.hotelModel.findByIdAndRemove(id);
    }

    async update (id:string,hotel:Hotel):Promise<Hotel>{
        return await this.hotelModel.findByIdAndUpdate(id,hotel,{new:true})
    }
    async deleteAll():Promise<any>{
        return await this.hotelModel.deleteMany({})

    }
}
