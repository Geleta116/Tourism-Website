import * as mongoose from 'mongoose';
export const HotelSchema =new mongoose.Schema({
    name: {
            type: String,
            required: [true, 'A hotel must have a name'],  
            unique: true,   
            trim: true
        },
    picturePath:String,
    price: {
            type: Number,
            required: [true, 'A hotel must have a price']
        },
    location:{
            type: String,
            required: [true, 'A hotel must have a location']
        },
    tourismSite:{
        type: String,
        required: [true, 'A hotel must have a site']
    },
    rating:{
        type: Number,
        required: [true, 'A hotel must have a rating']
    }

})

