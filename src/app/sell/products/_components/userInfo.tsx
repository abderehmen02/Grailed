"use client"

import { SecondaryButton } from "@/components/ui/buttons"
import { UserDb } from "@/db/models/userModal"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
import IosShareIcon from '@mui/icons-material/IosShare';
import { appConfig } from "@/config/appConfig"
import Link from "next/link"
export const UserInfoComponent = ()=>{
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
    return <div className="flex w-full py-3 items-center justify-between pageMaxWidth" >
<div className="flex gap-16 items-center m-6" >
      <div className="flex gap-4" >
        <img src={userInfo?.profolePic || appConfig.unknownPersonImg} className="w-[100px] h-[100px] block rounded-full" ></img>
        <div className="flex flex-col gap-3" >
              <h3 className="text-3xl font-bold" >{userInfo?.userName}</h3>
              <h5>Joined in {userInfo?.yearJoined}</h5>

        </div>
      </div>  
      <div  className="flex gap-4 items-center h-full">
<div className="flex flex-col gap-1">
<h2>{userInfo?.feedBacks?.length ?? 0   }</h2>
<h2>{ userInfo?.feedBacks.length? 'feedbacks' : 'No feedbacks'  }</h2>
</div>
<div className="flex flex-col gap-1 " >
<div> {userInfo?.transactions?.length ??  0} </div>
<div>Transactions</div>
</div>
<div className="flex flex-col gap-1 " >
<div> {userInfo?.followers?.length ??  0} </div>
<div>Followers</div>
</div>

      </div></div>
<div className="w-fit h-fit flex gap-3 relative" >
<Link href={appConfig.routes.newSell} className="font-bold text-sm flex items-center justify-center   text-white bg-black h-fit px-6 py-3 " >
<i className="bi bi-plus text-xl"></i>    NEW LISTING
</Link>
<button className="font-bold flex items-center justify-center   bg-white border-gray-300 border-1  h-full px-7 py-3 " >
<IosShareIcon  />
</button>

</div>
        </div>
}