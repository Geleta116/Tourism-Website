import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { tourismSite } from "../tourism-site.enum";

export class getHotelFilterDto{

    @IsOptional()
    @IsIn([tourismSite.Harar,tourismSite.AXUM,tourismSite.LALIBELA])
    tourismSite: tourismSite

  
}