"use client"
import { UserDb } from "@/db/models/userModal"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"

export const ForSell = ()=>{
    const {data : userInfo  , error , isLoading} = useQuery<UserDb>({
        queryKey : ["getUserInfo" ],
        queryFn : async ()=>{
            const userData = await axios.get("/api/getUserInfo")
            if(!userData.data){
                toast.error("can not get the data from the server! please refresh the page")
            }
            return userData.data
        }, 
        throwOnError  : false 
    })
if(isLoading || !userInfo) return <div>loading...</div>
    return <div className="flex gap-5 flex-col">
        <h3 className="font-bold text-3xl" >For Sale</h3>
{
    userInfo?.products?.length > 0 ? <div>products</div> : <h3 className="font-bold " >You have no items for sale.</h3>
}
        </div>
}