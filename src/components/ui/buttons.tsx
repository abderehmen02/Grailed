import { HTMLAttributes } from "react";



export const PrimaryButton : React.FC<HTMLAttributes<HTMLButtonElement>> = ({ className , children ,  ...btnProps})=>{
return <button className={className} {...btnProps}  >
{children}
</button>
}