import mongoose , {model , mongo, Schema} from "mongoose";
import { Container } from "postcss";
import { number } from "zod";


const productFirstCategories  = ["Menswear" , "Womenswear"]  as const ;
const productSecondCategories = {
    Menswear : ["Tops" , "Bottoms" , "Outerwear" , "Footwear" , "Tailering" , "Accessories" ] ,
    Womenswear : ["Tops" , "Bottoms" , "Outerwear" , "Dresses" , "Footwear" , "Accessories"  , "Begs & Luggage" , "Jewelry"]
} as const
const subCategories = [
    "Jeans" , "Joggers" , "Jumpsuits" , "Leggings" , "Maxi Skirts" , "Midi Skirts" , "Mini Skirts" , "Pants" , "Shorts" , "Sweatpants"
] as const

const sizes = {
    "S/M/L" : [ "xxs" , "xs"  , "S" , "M" , "L" , "XL" , "XXL" , "3XL" , "4XL" , "ONE SIZE"] ,
    "US" : ["00" ,"0" , "2" , "4" , "6"  , "8" , "10" , "12" , "14" , "16" , "18" , "20" , "22" , "24" , "26" ] ,
    "IT" : ["34" , "36" , "38" , "40" , "42" , "44" , "46" , "48" , "50" , "52" , "54"] ,
    "UK" : [ "2" , "4" , "6"  , "8" , "10" , "12" , "14" , "16" , "18" , "20" , "22" , "24" , "26"  , "28"  , "30"] ,
    "FR" : ["32" , "34" , "36" , "38" , "40" , "42" , "44" , "46" , "48"] 
} as const


export type SubCategory = typeof subCategories
export type FirstCategory = typeof productFirstCategories[number]
export type SecondCategory = typeof productSecondCategories.Menswear[number] | typeof productSecondCategories.Womenswear[number]
export type Size = typeof sizes["S/M/L"][number] | typeof sizes.US[number] | typeof sizes.IT[number] | typeof sizes.UK[number] | typeof sizes.FR[number]

export type ProductDb = {
    firstCategory : FirstCategory ,
    secondCategory : SecondCategory ,
    subcategory : SubCategory ,
    designer : string,
   size : Size , 
   name : string ,   
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