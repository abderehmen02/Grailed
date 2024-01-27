import { AuthServices } from "@/types/auth";
import mongoose , {model , mongo, Schema} from "mongoose";
import { googleUserModel } from "./googleUser";


export interface UserDb { 
    email : string ,
    password: string,
    country : string ,
    phoneNumber : string ,

}


const userSchema = new mongoose.Schema<UserDb>({
email : {type : String , required : true} ,
password : {type : String , required : true} ,
country : {type : String , required  : true} ,
phoneNumber : {type : String , required : true }
  });
  
export const userModel = ()=>{
    return mongoose.models?.user || model<UserDb>("user" , userSchema)
}


// export const userModelsMap = {
//     [AuthServices.NATIVE_USER] : userModel() ,
//     [AuthServices.GOOGLE] : googleUserModel()
// }