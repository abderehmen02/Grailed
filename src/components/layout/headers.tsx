import { appConfig } from "@/config/appConfig"
import Link from "next/link"
import { PrimaryButton, SecondaryButton, TextButton } from "../ui/buttons"

export const Header  = ()=>{
    return <div className="flex border-whinGray border-b-2 items-center justify-center py-6 gap-40" >
    <div className="flex gap-4" >
        <video  poster="/logo.jpg" className="max-w-[13rem] border-2 b outline-none border-none"  autoPlay={true} playsInline={true} loop={true} >
            <source src="/logo.webm" type="video/webm"/>
            <source src="/logo.mp4" type="video/mp4"/>
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
}



















