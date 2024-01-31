"use client"
import { appConfig } from "@/config/appConfig"
import { cn } from "@/lib/tailwind"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const SaleLeftNav = ()=>{
    const path = usePathname()
    console.log(path)
    return <div className="flex flex-col items-start m-6 jsutify-center gap-12" >
<div className="flex flex-col items-start gap-4" >
<p className="text-xs font-bold uppercase">MY ITEMS</p>
<Link className={cn("text-xs font-bold uppercase text-gray-500" , {"text-black underline " : path === appConfig.routes.forSale  } )}  href={appConfig.routes.forSale}  >for sale</Link>
<Link className={cn("text-xs font-bold uppercase text-gray-500" , {"text-black underline " : path === appConfig.routes.sold   } )} href={appConfig.routes.sold}>sold</Link>
<Link className={cn("text-xs font-bold uppercase text-gray-500" , {"text-black underline " : path === appConfig.routes.drafts  } )} href={appConfig.routes.drafts} >drafts</Link>
</div>
<div className="flex flex-col items-start gap-4" >
<p className="text-xs font-bold uppercase" >my profile</p>
<Link className={cn("text-xs font-bold uppercase text-gray-500" , {"text-black underline " : path === appConfig.routes.feedback  } )}  href={appConfig.routes.feedback}>FEEDBACK</Link>
<Link className={cn("text-xs font-bold uppercase text-gray-500" , {"text-black underline " : path === appConfig.routes.vercationMode  } )}  href={appConfig.routes.vercationMode} >VACATION MODE</Link>
<Link className={cn("text-xs font-bold uppercase text-gray-500" , {"text-black underline " : path === appConfig.routes.payements  } )}  href={appConfig.routes.payements} >PAYMENTS</Link>
<Link className={cn("text-xs font-bold uppercase text-gray-500" , {"text-black underline " : path === appConfig.routes.settings  } )}  href={appConfig.routes.settings} >SETTINGS</Link>
</div  >
    </div>
}