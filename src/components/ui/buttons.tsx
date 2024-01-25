import { cn } from "@/lib/tailwind";
import React, { HTMLAttributes, VFC } from "react";



export const PrimaryButton : React.FC<HTMLAttributes<HTMLButtonElement>> = ({ className , children ,  ...btnProps})=>{
return <button className={cn( "px-6 py-2 text-sm border-black border-2" ,className)} {...btnProps}  >
{children}
</button>
}



export const SecondaryButton : React.FC<HTMLAttributes<HTMLButtonElement>> = ({ className , children ,  ...btnProps})=>{
    return <button className={cn( "px-6 py-2 border-2 border-black text-sm bg-black text-white " ,className)} {...btnProps}  >
    {children}
    </button>
    }
    
export const TextButton : React.FC<HTMLAttributes<HTMLButtonElement>> = ({ className , children ,  ...btnProps})=>{
    return <button style={{borderColor :"#e1e1e1"}} className={cn( "px-4 py-2 text-sm  border-2" ,className)} {...btnProps} >{children}</button> }