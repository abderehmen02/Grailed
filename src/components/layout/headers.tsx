import { appConfig } from "@/config/appConfig"
import Link from "next/link"
import { PrimaryButton } from "../ui/buttons"

export const Header  = ()=>{
    return <div className="flex items-center justify-center py-4 gap-40" >
    <div className="flex gap-4" >
        <video  poster="/logo.jpg" className="max-w-[13rem] border-2 b outline-none border-none"  autoPlay={true} playsInline={true} loop={true} >
            <source src="/logo.webm" type="video/webm"/>
            <source src="/logo.mp4" type="video/mp4"/>
        </video>
        <div className="flex px-4 gap-5 centerContent  border-2 border-black" >
        <i style={{WebkitTextStroke : "1px"}} className="bi bi-search   h-fit  font-bold   "></i>
        <input className="w-[400px] outline-none h-fit "  />
        </div>
    </div>
        <div className="flex gap-6" >
            <PrimaryButton>SELL</PrimaryButton>
            <Link href={appConfig.routes.shop} ><PrimaryButton className="border-none" >SHOP</PrimaryButton></Link>
            <Link href={appConfig.routes.drycleanonly} ><PrimaryButton className="border-none" >READ</PrimaryButton></Link>
            <PrimaryButton>LOGIN</PrimaryButton>
            <PrimaryButton>SITN UP</PrimaryButton>
        </div>
    </div>
}