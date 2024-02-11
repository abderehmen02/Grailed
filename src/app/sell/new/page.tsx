"use client"
import { Header } from "@/components/layout/headers";
import { PrimaryButton } from "@/components/ui/buttons";
import { Condition, ProductCategory, ProductColor, ProductDepartement, Size, SubCategory, colorsArray, conditions, productCategories, productDepartements, sizes, subCategories } from "@/db/models/productModal";
import { useSell } from "@/hooks/sell";
import { InputSelect, InputSelectGrouped, PrimaryInput } from "@/ui/input";
import { Color, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import { useMutation } from "@tanstack/react-query";

import { useState } from "react";
import { toast } from "sonner";




export default function NewProduct (){
const [selectedDepartement , setSelectedDepartement ] = useState<ProductDepartement | undefined>(undefined)
const [selectedCategory , setSelectedCategory ] = useState<ProductCategory>(productCategories.Menswear[0])
const [selectedSubCategory , setSelectedSubCategory ] = useState<SubCategory | undefined>(undefined)
const [designer , setDesigner ] = useState<string>("")
const [size , setSize ] = useState<Size>(sizes.FR[0])
const [selectedSize , setSelectedSize ] = useState<Size>(sizes.FR[0])
const [name , setName ] = useState<string>("")
const [color , setColor ] = useState<ProductColor>(colorsArray[0])
const [condition , setCondition ] = useState<Condition>(conditions[0])
const [descreption , setDescreption ] = useState<string>("")
const [tags , setTags ] = useState<string>("")
const [price , setPrice ] = useState<number>(0)
const [imagesUrl , setImagesUrl ] = useState<string[]>([])
const [address , setAddress ] = useState("")
const {uploadImage , createProduct } = useSell()
const {data , isError , mutate , isPending}= useMutation({
    mutationFn  : ()=>createProduct({acceptOffer : true ,adressId : address , brustMeasure : size , category : selectedCategory , color : color , condition : condition , descreption : descreption , designer : designer , departement : selectedDepartement || productDepartements[0]  , floorPrice : "0" , isDraft : false , lengthMeasure :  "500" ,name : name , photos : imagesUrl , price : String(price) , shouldersMeasure : size ,  size , sleeveLengthMeasure  : size , smartPricing : false ,subcategory : selectedSubCategory || subCategories[0] , tags : [tags] , waistMeasure : size }) ,
    onSuccess : ()=>{
        toast.success("product has been saved!")
    } ,
    onError : ()=>[
        toast.error("some error hapened !, please try again later.")
    ]
})



    return <div className="flex items-center flex-col" > 
<Header/>
<div className="flex items-start w-fit py-12 gap-11  pageMaxWidth px-11 jsutify-start flex-col " >
<div className="flex items-center w-full justify-between" >    <h2 className="text-3xl font-bold " >Add a new listing</h2> <h2 className="text-blue-700 font-bold text-sm" >HOW TO SELL GUIDE  <i style={{WebkitTextStroke : 1}} className="bi  bi-arrow-right "></i>  </h2> </div>
<h3 className="text-xl font-bold" >Details</h3>
<div className="flex gap-20" >
<InputSelect label="Departement" value={selectedDepartement} list={productDepartements}  handleChange={(e)=>setSelectedDepartement(e.target.value as ProductDepartement)} />
<InputSelect label="Subcategories" value={selectedSubCategory}  list={subCategories}  handleChange={(e)=>setSelectedSubCategory(e.target.value as SubCategory)} />
</div>
<div className="flex gap-20" >
<PrimaryInput value={designer} onChange={(e)=>setDesigner(e.target.value)} placeholder="Designer" className="w-[400px]" ></PrimaryInput>
<InputSelectGrouped value={size} label="sizes" handleChange={(e)=>{setSize(e.target.value as Size)}} list={Object.keys(sizes).map((key)=>({label : key  , list : sizes[key as keyof typeof sizes ]   })) } />
</div>
<div className="py-5" >
<PrimaryInput value={name} onChange={(e)=>setName(e.target.value)} label="Item name" />
</div>

<div className="py-5" >
<PrimaryInput value={color} onChange={(e)=>setColor(e.target.value as ProductColor)} label="Color" />
</div>
<div>
<InputSelect label="Condition" handleChange={(e)=>setCondition(e.target.value  as Condition )} value={condition}  list={conditions  } />
</div>

<div className="py-8" >
<PrimaryInput label="Description" value={descreption} onChange={(e)=>setDescreption(e.target.value)} />
</div>

<div className="py-8" >
<PrimaryInput label="Tags" value={tags}  onChange={(e)=>setTags(e.target.value)} />
</div>
<div className="py-8" >
<PrimaryInput label="Price" value={price}  onChange={(e)=>setPrice(Number(e.target.value))} />
</div>
<div>
<PrimaryInput label="Address" value={address}  onChange={(e)=>setAddress(e.target.value)} />
</div>
<div className="flex gap-5 " >
<div className="w-[70px] rounded-lg h-[70px] border-2 border-black relative cursor-pointer" ><img src={imagesUrl[0]} className="absolute w-full h-full rounded-lg top-0 left-0 " /> <input onChange={(e)=>{uploadImage(e , setImagesUrl ) }}  type="file" className="    items-center justify-center opacity-0 bg-red-400 border-green-600 absolute w-full h-full     cursor-pointer" /> <i className="bi text-2xl absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 bi-camera"></i> </div>
<div className="w-[70px] rounded-lg h-[70px] border-2 border-black relative cursor-pointer" ><img src={imagesUrl[1]} className="absolute w-full h-full rounded-lg top-0 left-0 " /> <input  onChange={(e)=>{uploadImage(e , setImagesUrl ) }}  type="file" className="    items-center justify-center border-green-600 absolute w-full h-full   opacity-0  cursor-pointer" /> <i className="bi text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bi-camera"></i> </div>
<div className="w-[70px] rounded-lg h-[70px] border-2 border-black relative cursor-pointer" ><img src={imagesUrl[2]} className="absolute w-full h-full rounded-lg top-0 left-0 " /> <input  onChange={(e)=>{uploadImage(e , setImagesUrl ) }}  type="file" className="    items-center justify-center border-green-600 absolute w-full h-full   opacity-0  cursor-pointer" /> <i className="bi text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bi-camera"></i> </div>
<div className="w-[70px] rounded-lg h-[70px] border-2 border-black relative cursor-pointer" ><img src={imagesUrl[3]} className="absolute w-full h-full rounded-lg top-0 left-0 " /> <input  onChange={(e)=>{uploadImage(e , setImagesUrl ) }}  type="file" className="    items-center justify-center border-green-600 absolute w-full h-full   opacity-0  cursor-pointer" /> <i className="bi text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bi-camera"></i> </div>
<div className="w-[70px] rounded-lg h-[70px] border-2 border-black relative cursor-pointer" ><img src={imagesUrl[4]} className="absolute w-full h-full rounded-lg ²top-0 left-0 " /> <input  onChange={(e)=>{uploadImage(e , setImagesUrl ) }}  type="file" className="    items-center justify-center border-green-600 absolute w-full h-full   opacity-0  cursor-pointer" /> <i className="bi text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bi-camera"></i> </div>
<div className="w-[70px] rounded-lg h-[70px] border-2 border-black relative cursor-pointer" ><img src={imagesUrl[5]} className="absolute w-full h-full rounded-lg ²top-0 left-0 " /> <input  onChange={(e)=>{uploadImage(e , setImagesUrl ) }}  type="file" className="    items-center justify-center border-green-600 absolute w-full h-full   opacity-0  cursor-pointer" /> <i className="bi text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bi-camera"></i> </div>

</div>
<PrimaryButton loading={isPending} onClick={()=>mutate()} >Save</PrimaryButton>
</div>
    </div>
}