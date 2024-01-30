"use client"

import { SecondaryButton } from "@/components/ui/buttons"
import { UserDb } from "@/db/models/userModal"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"
import IosShareIcon from '@mui/icons-material/IosShare';
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
    return <div className="flex items-center justify-between pageMaxWidth" >
<div>
      <div className="flex gap-4" >
        <img src={userInfo?.profolePic} className="w-[200px] h-[200px] block rounded-full" ></img>
        <div className="flex flex-col gap-4" >
              <h3>{userInfo?.userName}</h3>
              <h5>Joined in {userInfo?.yearJoined}</h5>

        </div>
      </div>  
      <div  className="flex gap-4 items-center h-full">
<div className="flex flex-col gap-1">
{userInfo?.feedBacks.length === 0 ? "No feedback yet" : <>
<h2>feedbacks</h2>
<h2>{userInfo?.feedBacks.length}</h2>
</> }

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
<div className="w-fit" >
<SecondaryButton>
<i className="bi bi-plus"></i>    NEW LISTING
</SecondaryButton>
<div className="px-10 py-5 bg-white border-1 bordeer-gray" >
<IosShareIcon/>
</div>
</div>
        </div>
}