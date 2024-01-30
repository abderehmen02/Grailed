import mongoose , {model , mongo, Schema} from "mongoose";


const productFirstCategories : string[] = ["Menswear" , "Womenswear"] ;
const productSecondCategories = {
    Menswear : [] ,
    Womenswear : []
}



export type ProductDb {
    caterory : 
}

const userSchema = new mongoose.Schema<UserDb & {yearJoined : string } >({
  });
  
export const ProductModal = ()=>{
    return mongoose.models?.user || model<UserDb & {yearJoined :string }>("user" , userSchema)
}


// export const userModelsMap = {
//     [AuthServices.NATIVE_USER] : userModel() ,
//     [AuthServices.GOOGLE] : googleUserModel()
// }