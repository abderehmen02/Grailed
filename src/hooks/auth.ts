import { UserDb } from "@/db/models/userModal"
import axios from "axios"
import { StatusCodes } from "http-status-codes"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export const useAuth  = ()=>{
    const router = useRouter()

    const signUp = async (data : UserDb)=>{
    const res = await axios.post("/api/signUp" , data )
    if(res.status === StatusCodes.CREATED){
        router.push("/for-sell")
    }
    else toast.error("somme error hapened! please try again")
    }

return {signUp}
}