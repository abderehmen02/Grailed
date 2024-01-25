import { HTMLAttributes } from "react";



export const PrimaryButton : React.FC<HTMLAttributes<HTMLButtonElement>> = ({ className ,  ...btnProps})=>{
return <button className={className} {...btnProps}  >

</button>
}