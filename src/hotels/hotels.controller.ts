import { Controller, Get,Post,Put, Delete,Param,Body, UseInterceptors, BadRequestException, UploadedFile, Res, Patch, Query, ValidationPipe} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateHotelDto} from './dto/create-hotel.dto';
import { HotelsService } from './hotels.service';
import { Hotel } from './interfaces/hotel.interface';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { getHotelFilterDto } from './dto/filter-hotel.dto';



@Controller('hotels')
export class HotelsController {
    constructor(private readonly hotelService:HotelsService){}
    
    @Get()
    getHotels(@Query(ValidationPipe) filterDto:getHotelFilterDto):Promise<Hotel[]>{
        console.log(filterDto)
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

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination:"./uploads",
            filename:(req,file,cb) => {
                const name = file.originalname.split('.')[0]
                const fileExtension = file.originalname.split('.')[1]
                const newFileName = name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension

                cb(null, newFileName)
            }
        }),
        fileFilter: (req,file,cb)=>{
            if(!file.originalname.match(/\.(jpeg|jpg|png|gif)$/)){
                return cb(null,false)

            }
            cb(null,true)

        }
    }))

    uploadData( @Body() hotelDTO:CreateHotelDto,@UploadedFile('file') file:Express.Multer.File){
        if (!file){
            throw new BadRequestException("File is not appropriate")
        } else {

            const filePathURL = `http://localhost:3000/hotels/viewImage/${file.filename}`
            this.hotelService.create(hotelDTO,filePathURL)
        }
    }
    @Get('viewImage/:filename')
    async viewTheFile(@Param('filename') filename, @Res() res:Response): Promise<void> {
        return await res.sendFile(filename,{root: './uploads'})
    } 

    

}
