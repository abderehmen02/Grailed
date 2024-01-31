import { Header } from "@/components/layout/headers";
import { UserInfoComponent } from "./_components/userInfo";
import { SaleLeftNav } from "@/components/sell/nav";
import { Announcements } from "./_components/announcements";
import { ForSell } from "./_components/forSellProducts";

export default function Page (){
    return <div  className="flex items-center flex-col" >
        <Header/>
        <UserInfoComponent/>
        <div className="w-full h-full  pageMaxWidth  gap-24  justify-start flex " >
            <SaleLeftNav/>
           <div className="flex gap-10 flex-col w-full" >
          <Announcements/>            
          <ForSell/>
          </div>
        </div>
    </div>
}