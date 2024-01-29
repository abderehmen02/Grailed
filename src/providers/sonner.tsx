import React from "react";
import { Toaster, toast } from 'sonner';

export const ToasterProvider : React.FC<{children : React.ReactNode}> = ({children})=>{
return <>
<Toaster richColors />
{children}
</>
}