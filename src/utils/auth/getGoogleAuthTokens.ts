import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../clientAsyncWraper";
import { authConfig } from "@/config/authConfig";
import axios from "axios";
import qs from "qs"

// {access_token : string , id_token : string ,scope : string , refresh_token  : string}
export const getGoogleAuthTokens =  asyncWrapper<[code: string] ,any >(  async (code)  =>{
    // if( !process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID ){
    // const     error = "can not get the client id" ;
    // return {error}
    // throw new Error(error)
    // }
    // if(!process.env.GOOGLE_AUTH_CLIENT_SECRET){
    //      const        error = "can not get the google auth client secret"
    //      return {error}
    //     throw new Error(error)
    // }

    const baseUrl = "https://oauth2.googleapis.com/token"
    const values = {
        code ,
        client_id: "302018067063-3fiouob3a7l6lf91241f0b1q5vgih127.apps.googleusercontent.com"  ,
        client_secret: "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" ,
        redirect_uri :authConfig.googleRedirectUrl ,
        grant_type : "authorization_code"
    }

 const response = await axios.post(baseUrl , qs.stringify(values) ,{
    headers : {
        "Content-Type" : "application/x-www-form-urlencoded"  ,
    }
 } )   
return {id_token : response.data.id_token as string , access_token : response.data.access_token as string  , refresh_token : response.data.refresh_token as string , scope : response.data.scope }
})