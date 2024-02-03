"use client"
import { Header } from "@/components/layout/headers";
import { Condition, ProductCategory, ProductColor, ProductDepartement, Size, SubCategory, colorsArray, conditions, productCategories, productDepartements, sizes, subCategories } from "@/db/models/productModal";
import { InputSelect, InputSelectGrouped, PrimaryInput } from "@/ui/input";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useState } from "react";




export default function NewProduct (){
const [selectedDepartement , setSelectedDepartement ] = useState<ProductDepartement | undefined>(undefined)
const [selectedCategory , setSelectedCategory ] = useState<ProductCategory>(productCategories.Menswear[0])
const [selectedSubCategory , setSelectedSubCategory ] = useState<SubCategory | undefined>(undefined)
const [designer , setDesigner ] = useState<string>("")
const [size , setSize ] = useState<Size | undefined>(undefined)
const [selectedSize , setSelectedSize ] = useState<Size>(sizes.FR[0])
const [name , setName ] = useState<string>("")
const [color , setColor ] = useState<ProductColor>(colorsArray[0])
const [condition , setCondition ] = useState<Condition>(conditions[0])
const [descreption , setDescreption ] = useState<string>("")
    return <div className="flex items-center flex-col" > 
<Header/>
<div className="flex items-start w-fit py-12 gap-11  pageMaxWidth px-11 jsutify-start flex-col " >
<div className="flex items-center w-full justify-between" >    <h2 className="text-3xl font-bold " >Add a new listing</h2> <h2 className="text-blue-700 font-bold text-sm" >HOW TO SELL GUIDE  <i style={{WebkitTextStroke : 1}} className="bi  bi-arrow-right "></i>  </h2> </div>
<h3 className="text-xl font-bold" >Details</h3>
<div className="flex gap-20" >
<InputSelect label="Departement" value={selectedDepartement} list={productDepartements}  handleChange={(e)=>setSelectedDepartement(e.target.value as ProductDepartement)} />
<InputSelect label="Subcategories" value={selectedSubCategory}  list={subCategories}  handleChange={(e)=>setSelectedSubCategory(e.target.value as SubCategory)} />
</div>
<div>
<PrimaryInput value={designer} onChange={(e)=>setDesigner(e.target.value)} placeholder="Designer" className="w-[400px]" ></PrimaryInput>
{/* <InputSelectGrouped value={size} list={Object.keys(sizes).map((key)=>({label : key , list : sizes[key] as string[]  }))} /> */}
</div>







</div>
    </div>
}