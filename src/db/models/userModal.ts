import mongoose , {model , mongo, Schema} from "mongoose";


export type  UserDb =  { 
    email : string ,
    password: string,
    country : string ,
    phoneNumber : string ,
   userName : string ,
   transactions  :string[] ,
   followers : string[] ,
   feedBacks : string[] ,
   profolePic : string ,
   yearJoined : string ,
   
}



const userSchema = new mongoose.Schema<UserDb  >({
email : {type : String , required : true} ,
password : {type : String , required : true} ,
country : {type : String , required  : true} ,

phoneNumber : {type : String , required : true } ,
userName : {type : String   , required : true} ,
transactions: {type : [String] , default : []  } ,
followers : {type : [String] , default : []} ,
feedBacks : {type : [String] , default : []} ,
profolePic : {type : String , default : ""} ,
yearJoined : {type : String , default : new Date().getFullYear().toString()}
  });
  
export const userModel = ()=>{
    return mongoose.models?.user || model<UserDb & {yearJoined :string }>("user" , userSchema)
}


// export const userModelsMap = {
//     [AuthServices.NATIVE_USER] : userModel() ,
//     [AuthServices.GOOGLE] : googleUserModel()
// }