import mongoose , {model , mongo, Schema} from "mongoose";


export type  UserDb =  { 
    email : string ,
    password: string,
    country : string ,
    phoneNumber : string ,
   userName : string 
   
}



const userSchema = new mongoose.Schema<UserDb & {yearJoined : string } >({
email : {type : String , required : true} ,
password : {type : String , required : true} ,
country : {type : String , required  : true} ,
phoneNumber : {type : String , required : true } ,
userName : {type : String   , required : true} ,
yearJoined : {type : String , required : true}
  });
  
export const userModel = ()=>{
    return mongoose.models?.user || model<UserDb & {yearJoined :string }>("user" , userSchema)
}


// export const userModelsMap = {
//     [AuthServices.NATIVE_USER] : userModel() ,
//     [AuthServices.GOOGLE] : googleUserModel()
// }