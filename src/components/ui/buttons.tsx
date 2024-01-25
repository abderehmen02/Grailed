import { cn } from "@/lib/tailwind";
import { HTMLAttributes } from "react";



export const PrimaryButton : React.FC<HTMLAttributes<HTMLButtonElement>> = ({ className , children ,  ...btnProps})=>{
return <button className={cn( "px-4 py-2 text-sm border-black border-2" ,className)} {...btnProps}  >
{children}
</button>
}