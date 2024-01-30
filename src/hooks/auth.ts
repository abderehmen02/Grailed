import { appConfig } from "@/config/appConfig"
import { SignUpData, signInData } from "@/utils/validators/auth"
import axios, { AxiosError } from "axios"
import { StatusCodes } from "http-status-codes"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useAuth  = ()=>{
    const router = useRouter()

    const signUp = async (data : SignUpData)=>{
    const res = await axios.post("/api/signUp" , data )
    if(res.status === StatusCodes.CREATED){
        toast.success("account has been created!")
        router.push("/for-sell")
    }
    else toast.error("somme error hapened! please try again")
    }

    const signIn : (data : signInData)=>Promise<string | void >  = async (data : signInData)  =>{
    try {
        const res = await axios.post("/api/login" , data)
        console.log("response" , res)
        if(res.status === StatusCodes.CREATED){
            toast.success("Logged in succussfully!")
            router.push(appConfig.routes.forSale)
            return 
        }
        if(res?.data?.error?.message) {
            toast.error(res.data.error.message)
            return res.data.error.message as string  
        }
else         toast.error("some error hapened ! please try again later") }
catch(err : any  ){
    if (err?.response?.data?.error?.message ) return  err?.response?.data?.error?.message as string | undefined
    else  toast.error("request failed! please try again later!")
}
    }

return {signUp  ,signIn }
}