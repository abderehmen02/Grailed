import { appConfig } from "@/config/appConfig"
import Link from "next/link"
import { PrimaryButton } from "../ui/buttons"

export const Header  = ()=>{
    return <div className="flex items-center justify-center py-4 gap-8" >
    <div className="flex gap-4" >
        <video src="/logo.mp4" poster="/logo.jpg" className="max-w-[13rem]"  autoPlay={true} playsInline={true} loop={true} >
            <source src="/logo.webm" type="video/webm"/>
            <source src="/logo.mp4" type="video/mp4"/>
        </video>
        <div className="flex" >
        <textarea/>
        </div>
    </div>
        <div>
            <PrimaryButton>SELL</PrimaryButton>
            <Link href={appConfig.routes.shop} >SOP</Link>
            <Link href={appConfig.routes.drycleanonly} >READ</Link>
            <PrimaryButton>LOGIN</PrimaryButton>
            <PrimaryButton>SITN UP</PrimaryButton>
        </div>
    </div>
}