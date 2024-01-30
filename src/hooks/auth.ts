import { UserDb } from "@/db/models/userModal"
import axios from "axios"
import { StatusCodes } from "http-status-codes"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useAuth  = ()=>{
    const router = useRouter()

    const signUp = async (data : UserDb)=>{
    console.log("data" , data)
    const res = await axios.post("/api/signUp" , data )
    console.log("res " , res)
    if(res.status === StatusCodes.CREATED){
        router.push("/sell")
    }
    else toast.error("somme error hapened! please try again")
    }

return {signUp}
}