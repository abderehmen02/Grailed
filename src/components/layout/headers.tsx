import { appConfig } from "@/config/appConfig"
import Link from "next/link"
import { PrimaryButton, SecondaryButton, TextButton } from "../ui/buttons"

export const Header  = ()=>{
    return <div>
    <div className="flex border-whinGray border-b-2 items-center justify-center py-6 gap-40" >
    <div className="flex gap-4" >
    <video 
  poster="https://assets.grailed.com/logo.jpg" 
  className="w-[140px] h-auto"  

  autoPlay 
  loop 
  playsInline 
  muted
>
  <source src="https://assets.grailed.com/logo.webm" type="video/webm" />
  <source src="https://assets.grailed.com/logo.mp4" type="video/mp4" />
</video>
        <div className="flex p-1 gap-5  centerContent  border-2 border-black" >
        <i style={{WebkitTextStroke : "1px"}} className="bi bi-search  mx-4 h-fit  font-bold   "></i>
        <input placeholder="Search" className="w-[400px] outline-none h-fit "  />
        <TextButton className="border-stone-400 uppercase text-xs font-bold" >Search</TextButton>
        </div>
    </div>
        <div className="flex gap-3" >
            <PrimaryButton className="font-semibold">SELL</PrimaryButton>
            <Link href={appConfig.routes.shop} ><PrimaryButton className="border-none  font-semibold" >SHOP</PrimaryButton></Link>
            <Link href={appConfig.routes.drycleanonly} ><PrimaryButton className="border-none font-semibold " >READ</PrimaryButton></Link>
            <TextButton className="border-stone-500 font-semibold" >LOGIN</TextButton>
            <SecondaryButton  >SITN UP</SecondaryButton>
        </div>
    </div>
<div className="flex w-full items-center py-2 justify-center border-whinGray border-b-2" >
<div className="flex pageMaxWidth w-full justify-between items-center " >
<div className="text-sm font-semibold">DESIGNERS</div>
<div className="text-sm font-semibold">MENSWEAR</div>

<div className="text-sm font-semibold">WOMENSWEAR</div>
<div className="text-sm font-semibold">SNEAKERS</div>
<div className="text-sm font-semibold">STAFF PICKS</div>
<div className="text-sm font-semibold">COLLECTIONS</div>
</div>
</div>
    </div>
}



















