import { HomeStyleCard } from "@/components/cards"
import React from "react"
import Title from "./Title"

export type ProductStyle = {
    name : string ,
    image : string
}

export const Styles : React.FC<{styles : ProductStyle[]}> =  ({styles})=>{
    return <div className="flex gap-6 px-4 sm:px-6 py-20  flex-col" >

        <Title text="Shop by Style"/>
        <div className="grid grid-cols-3 sm:grid-cols-4  lg:grid-cols-6 items-center gap-4 sm:gap-8" >        {
            styles.map(style=><HomeStyleCard key={style.name} {...style} />)
        }</div>
    </div>
}