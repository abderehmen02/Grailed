import { appConfig } from "@/config/appConfig"
import { UserDb } from "@/db/models/userModal"
import { signInData } from "@/utils/validators/auth"
import axios from "axios"
import { StatusCodes } from "http-status-codes"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useAuth  = ()=>{
    const router = useRouter()

    const signUp = async (data : UserDb)=>{
    const res = await axios.post("/api/signUp" , data )
    if(res.status === StatusCodes.CREATED){
        toast.success("account has been created!")
        router.push("/for-sell")
    }
    else toast.error("somme error hapened! please try again")
    }

    const signIn : (data : signInData)=>Promise<{message :string }| void>  = async (data : signInData)  =>{
        const res = await axios.post("/api/login" , data)
        if(res.status === StatusCodes.CREATED){
            toast.success("Logged in succussfully!")
            router.push(appConfig.routes.forSale)
            return 
        }
        if(res?.data?.error) {
            toast.error(res.data.error.message)
            return res.data.error as {message :string }
        }
else         toast.error("some error hapened ! please try again later")
    }

return {signUp  ,signIn }
}