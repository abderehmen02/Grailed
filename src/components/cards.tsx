import { ProductStyle } from "@/app/(marketing)/_components/styles";
import React from "react";

export const HomeStyleCard : React.FC<ProductStyle> = ({image , name})=>{
    return <div className="relative items-center flex flex-col gap-4" >
<img src={image} className="w-[220px]" />
<h3 className=" font-bold" >{name}</h3>
    </div>
}