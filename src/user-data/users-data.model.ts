import * as mongoose from "mongoose"





export const UserDataSchema = new mongoose.Schema(
  {
    
    firstname: {
      type: String,
      required: true,
     
      
    },
    lastname: {
      type: String,
      required: true,
      
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
    ,
  role: {
      type: String,
  }
}
  ,{ timestamps: true }
)

export interface User extends mongoose.Document {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  
}