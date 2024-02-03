import mongoose , {model , mongo, Schema} from "mongoose";
import { Container } from "postcss";
import { number } from "zod";


export const productDepartements  = ["Menswear" , "Womenswear"]  as const ;
export const productCategories = {
    Menswear : ["Tops" , "Bottoms" , "Outerwear" , "Footwear" , "Tailering" , "Accessories" ] ,
    Womenswear : ["Tops" , "Bottoms" , "Outerwear" , "Dresses" , "Footwear" , "Accessories"  , "Begs & Luggage" , "Jewelry"]
} as const
export const subCategories = [
    "Jeans" , "Joggers" , "Jumpsuits" , "Leggings" , "Maxi Skirts" , "Midi Skirts" , "Mini Skirts" , "Pants" , "Shorts" , "Sweatpants"
] as const

export const sizes = {
    "S/M/L" : [ "xxs" , "xs"  , "S" , "M" , "L" , "XL" , "XXL" , "3XL" , "4XL" , "ONE SIZE"] ,
    "US" : ["00" ,"0" , "2" , "4" , "6"  , "8" , "10" , "12" , "14" , "16" , "18" , "20" , "22" , "24" , "26" ] ,
    "IT" : ["34" , "36" , "38" , "40" , "42" , "44" , "46" , "48" , "50" , "52" , "54"] ,
    "UK" : [ "2" , "4" , "6"  , "8" , "10" , "12" , "14" , "16" , "18" , "20" , "22" , "24" , "26"  , "28"  , "30"] ,
    "FR" : ["32" , "34" , "36" , "38" , "40" , "42" , "44" , "46" , "48"] 
} as const



export const colorsArray = [
    "alice blue", "antique white", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanched almond", "blue",
    "blue violet", "brown", "burly wood", "cadet blue", "chartreuse", "chocolate", "coral", "cornflower blue", "cornsilk", "crimson",
    "cyan", "dark blue", "dark cyan", "dark golden rod", "dark gray", "dark green", "dark khaki", "dark magenta", "dark olive green", "dark orange",
    "dark orchid", "dark red", "dark salmon", "dark sea green", "dark slate blue", "dark slate gray", "dark turquoise", "dark violet", "deep pink", "deep sky blue",
    "dim gray", "dodger blue", "fire brick", "floral white", "forest green", "fuchsia", "gainsboro", "ghost white", "gold", "golden rod",
    "gray", "green", "green yellow", "honey dew", "hot pink", "indian red", "indigo", "ivory", "khaki", "lavender",
    "lavender blush", "lawn green", "lemon chiffon", "light blue", "light coral", "light cyan", "light golden rod yellow", "light gray", "light green", "light pink",
    "light salmon", "light sea green", "light sky blue", "light slate gray", "light steel blue", "light yellow", "lime", "lime green", "linen", "magenta",
    "maroon", "medium aqua marine", "medium blue", "medium orchid", "medium purple", "medium sea green", "medium slate blue", "medium spring green", "medium turquoise", "medium violet red",
    "midnight blue", "mint cream", "misty rose", "moccasin", "navajo white", "navy", "old lace", "olive", "olive drab", "orange",
    "orange red", "orchid", "pale golden rod", "pale green", "pale turquoise", "pale violet red", "papaya whip", "peach puff", "peru", "pink",
    "plum", "powder blue", "purple", "red", "rosy brown", "royal blue", "saddle brown", "salmon", "sandy brown", "sea green",
    "sea shell", "sienna", "silver", "sky blue", "slate blue", "slate gray", "snow", "spring green", "steel blue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "white smoke", "yellow", "yellow green"
  ] as const

export const conditions = ["New/Never Wom" , "Gently Used" , "Used" , "Very Wom"] as const

export type SubCategory = typeof subCategories[number]
export type ProductDepartement = typeof productDepartements[number]
export type ProductCategory = typeof productCategories.Menswear[number] | typeof productCategories.Womenswear[number]
export type Size = typeof sizes["S/M/L"][number] | typeof sizes.US[number] | typeof sizes.IT[number] | typeof sizes.UK[number] | typeof sizes.FR[number]
export type ProductColor = typeof colorsArray[number]
export type Condition = typeof conditions[number]
export type ProductDb = {
    departement : ProductDepartement ,
    category : ProductCategory ,
    subcategory : SubCategory ,
    designer : string,
   size : Size , 
   name : string ,
    color : string ,
    condition  :  Condition ,
    descreption : string ,
    brustMeasure : string ,
    waistMeasure : string ,
    lengthMeasure : string ,
    sleeveLengthMeasure : string,
    shouldersMeasure :string ,
    tags : string[] ,
    price : string ,
    acceptOffer : boolean ,
    smartPricing : boolean ,
    floorPrice : string ,
    adressId :string ,
    photos : string[] ,
    isDraft : boolean
}

const ProductSchema = new mongoose.Schema<ProductDb  >({
    departement : {type : String , required : true} , 
    category : {type : String , required : true} ,
    subcategory : {type : String , required : true} ,
    designer : {type : String , required : true } ,
    size : {type : String , required : true} ,
    name : {type : String, required : true} ,
    color : {type : String , required : true} ,
    condition : {type : String , required : true} , 
    descreption : {type : String , required : true} , 
    brustMeasure : {type : String , required : true} ,
    waistMeasure : {type : String , required : true} , 
    lengthMeasure : {type : String , required : true} ,
    sleeveLengthMeasure : {type : String , required : true} , 
    shouldersMeasure : {type : String , required : true} ,
    tags : {type : [String] , required : true} ,
    price :{type : String , required : true} ,
    acceptOffer : {type : Boolean , default: true} ,
    smartPricing :  {type : Boolean , default : true} ,
    floorPrice  : {type : String, required: false},
    adressId : {type : String , required : true} ,
    photos : {type : [String] , required : false } ,
    isDraft :{type : Boolean , default : false}
  });
  


export const ProductModal = ()=>{
    return mongoose.models?.product || model<ProductDb>("product" , ProductSchema)
}


// export const userModelsMap = {
//     [AuthServices.NATIVE_USER] : userModel() ,
//     [AuthServices.GOOGLE] : googleUserModel()
// }