import { getServerSession } from "next-auth"
import { getToken } from "next-auth/jwt"
import { useSession } from "next-auth/react"

export default   function SellPage( ){
    const session = getServerSession()
    console.log("session" , session)
    return <div>
        the sell page
    </div>
}