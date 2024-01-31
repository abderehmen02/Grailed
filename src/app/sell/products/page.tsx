import { Header } from "@/components/layout/headers";
import { UserInfoComponent } from "./_components/userInfo";
import { SaleLeftNav } from "@/components/sell/nav";

export default function Page (){
    return <div  className="flex items-center flex-col" >
        <Header/>
        <UserInfoComponent/>
        <div className="w-full pageMaxWidth items-center justify-start flex " >
            <SaleLeftNav/>
            
        </div>
    </div>
}