import { Header } from "@/components/layout/headers";
import { UserInfoComponent } from "./_components/userInfo";

export default function Page (){
    return <div  className="flex items-center flex-col" >
        <Header/>
        <UserInfoComponent/>
    </div>
}