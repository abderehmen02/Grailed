import { authConfig } from "@/config/authConfig"

export const getGoogleAuthUrl =   (): string=> {

// if(!process.env.GoogleClientId){
//     const error = "can not get the client id from the envirement variables" 
//     console.log(error)
//     throw new Error(error)
// }
const   clientsecret = "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" ; 
    const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth"

    const options = {
        redirect_uri : authConfig.googleRedirectUrl ,
        client_id: "302018067063-3fiouob3a7l6lf91241f0b1q5vgih127.apps.googleusercontent.com" ,
        access_type: "offline"  ,
        response_type : "code"  ,
        prompt : 'consent' ,
        scope: ["https://www.googleapis.com/auth/userinfo.profile" , "https://www.googleapis.com/auth/userinfo.email"].join(" ")
    }
    
    
    const qs = new URLSearchParams(options)
    

return `${baseUrl}?${qs.toString()}`
}